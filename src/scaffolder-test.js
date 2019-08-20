import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as rubyVersionScaffolder from './ruby-version';
import * as rakeScaffolder from './rake';
import * as gemsScaffolder from './gems';
import {scaffold} from './scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(rubyVersionScaffolder, 'default');
    sandbox.stub(rakeScaffolder, 'default');
    sandbox.stub(gemsScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is scaffolded', async () => {
    const projectRoot = any.string();
    const gemsForRake = any.listOf(any.word);
    rakeScaffolder.default.withArgs(projectRoot).resolves({gems: gemsForRake});

    const result = await scaffold({projectRoot});

    assert.calledWith(rubyVersionScaffolder.default, projectRoot);
    assert.calledWith(gemsScaffolder.default, projectRoot, gemsForRake);
    assert.equal(result.verificationCommand, 'rake');
  });
});
