import scaffoldRubyVersion from './ruby-version';
import scaffoldRake from './rake';

export async function scaffold({projectRoot}) {
  await Promise.all([
    scaffoldRubyVersion(projectRoot),
    scaffoldRake(projectRoot)
  ]);

  return {
    verificationCommand: 'rake'
  };
}
