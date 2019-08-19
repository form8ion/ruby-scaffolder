import {resolve} from 'path';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as fsAsync from '../thirdparty-wrappers/fs';
import scaffoldRake from './rake';

suite('Rake', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fsAsync, 'copyFile');
  });

  teardown(() => sandbox.restore());

  test('that the Rakefile is generated', async () => {
    const projectRoot = any.string();

    const results = await scaffoldRake(projectRoot);

    assert.deepEqual(results.gems, ['rake']);
    assert.calledWith(
      fsAsync.copyFile,
      resolve(__dirname, '..', 'templates', 'Rakefile.rb'),
      `${projectRoot}/Rakefile`
    );
  });
});
