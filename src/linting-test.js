import {resolve} from 'path';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as fsAsync from '../thirdparty-wrappers/fs';
import scaffoldLinting from './linting';

suite('Linting', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fsAsync, 'copyFile');
  });

  teardown(() => sandbox.restore());

  test('that the markdown lint style is defined', async () => {
    const projectRoot = any.string();

    const results = await scaffoldLinting(projectRoot);

    assert.deepEqual(results.gems, ['mdl']);
    assert.calledWith(
      fsAsync.copyFile,
      resolve(__dirname, '..', 'templates', 'markdownlint-style.rb'),
      `${projectRoot}/markdownlint-style.rb`
    );
  });
});
