import {promises as fsPromises} from 'fs';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as execa from '../thirdparty-wrappers/execa';
import scaffoldRubyVersion from './ruby-version';

suite('ruby-version', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fsPromises, 'writeFile');
    sandbox.stub(execa, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the version file is written to the file system', async () => {
    const projectRoot = any.string();

    await scaffoldRubyVersion(projectRoot);

    assert.calledWith(fsPromises.writeFile, `${projectRoot}/.ruby-version`, '2.6.3');
    assert.calledWith(execa.default, 'rbenv', ['install']);
  });
});
