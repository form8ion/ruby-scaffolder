import {promises} from 'fs';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import scaffoldRubyVersion from './ruby-version';

suite('ruby-version', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(promises, 'writeFile');
  });

  teardown(() => sandbox.restore());

  test('that the version file is written to the file system', async () => {
    const projectRoot = any.string();

    await scaffoldRubyVersion(projectRoot);

    assert.calledWith(promises.writeFile, `${projectRoot}/.ruby-version`, '2.6.3');
  });
});
