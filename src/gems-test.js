import {resolve} from 'path';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as fsAsync from '../thirdparty-wrappers/fs';
import * as execa from '../thirdparty-wrappers/execa';
import scaffoldGems from './gems';

suite('Gems', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fsAsync, 'copyFile');
    sandbox.stub(execa, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the Gemfile is generated', async () => {
    const projectRoot = any.string();

    await scaffoldGems(projectRoot);

    assert.calledWith(
      fsAsync.copyFile,
      resolve(__dirname, '..', 'templates', 'Gemfile.rb'),
      `${projectRoot}/Gemfile`
    );
    assert.calledWith(execa.default, 'bundle', ['install']);
    assert.isTrue(execa.default.calledAfter(fsAsync.copyFile));
  });
});
