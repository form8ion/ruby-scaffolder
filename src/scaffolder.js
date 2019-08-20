import scaffoldRubyVersion from './ruby-version';
import scaffoldRake from './rake';
import scaffoldGem from './gems';

export async function scaffold({projectRoot}) {
  const [rakeResults] = await Promise.all([
    scaffoldRake(projectRoot),
    scaffoldRubyVersion(projectRoot)
  ]);

  await scaffoldGem(projectRoot, rakeResults.gems);

  return {
    verificationCommand: 'rake'
  };
}
