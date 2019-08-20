import {resolve} from 'path';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as fsAsync from '../thirdparty-wrappers/fs';
import scaffoldGems from './gems';

suite('Gems', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fsAsync, 'copyFile');
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
  });
});
