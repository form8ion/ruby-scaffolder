import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as rubyVersionScaffolder from './ruby-version';
import * as rakeScaffolder from './rake';
import {scaffold} from './scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(rubyVersionScaffolder, 'default');
    sandbox.stub(rakeScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is scaffolded', async () => {
    const projectRoot = any.string();

    const result = await scaffold({projectRoot});

    assert.calledWith(rubyVersionScaffolder.default, projectRoot);
    assert.calledWith(rakeScaffolder.default, projectRoot);
    assert.equal(result.verificationCommand, 'rake');
  });
});
