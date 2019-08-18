import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as rubyVersionScaffolder from './ruby-version';
import {scaffold} from './scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(rubyVersionScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is scaffolded', async () => {
    const projectRoot = any.string();

    const result = await scaffold({projectRoot});

    assert.calledWith(rubyVersionScaffolder.default, projectRoot);
    assert.equal(result.verificationCommand, 'rake');
  });
});
