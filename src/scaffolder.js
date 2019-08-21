import {info} from '@travi/cli-messages';
import scaffoldRubyVersion from './ruby-version';
import scaffoldRake from './rake';
import scaffoldGem from './gems';
import scaffoldDocumentation from './documentation';
import scaffoldLinting from './linting';

export async function scaffold({projectRoot}) {
  info('Initializing Ruby project');

  const [rakeResults, lintingResults] = await Promise.all([
    scaffoldRake(projectRoot),
    scaffoldLinting(projectRoot),
    scaffoldRubyVersion(projectRoot)
  ]);

  await scaffoldGem(projectRoot, [...rakeResults.gems, ...lintingResults.gems]);

  return {
    verificationCommand: 'rake',
    documentation: scaffoldDocumentation()
  };
}
