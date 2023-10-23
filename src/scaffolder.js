import {info} from '@travi/cli-messages';

import scaffoldRubyVersion from './ruby-version.js';
import scaffoldRake from './rake.js';
import scaffoldGem from './gems.js';
import scaffoldDocumentation from './documentation.js';
import scaffoldLinting from './linting.js';

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
