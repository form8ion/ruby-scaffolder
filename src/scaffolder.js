import scaffoldRubyVersion from './ruby-version';

export async function scaffold({projectRoot}) {
  await scaffoldRubyVersion(projectRoot);

  return {
    verificationCommand: 'rake'
  };
}
