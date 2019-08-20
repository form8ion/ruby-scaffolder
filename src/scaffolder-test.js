import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as rubyVersionScaffolder from './ruby-version';
import * as rakeScaffolder from './rake';
import * as gemsScaffolder from './gems';
import * as documentationScaffolder from './documentation';
import {scaffold} from './scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(rubyVersionScaffolder, 'default');
    sandbox.stub(rakeScaffolder, 'default');
    sandbox.stub(gemsScaffolder, 'default');
    sandbox.stub(documentationScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is scaffolded', async () => {
    const projectRoot = any.string();
    const gemsForRake = any.listOf(any.word);
    const documentation = any.simpleObject();
    rakeScaffolder.default.withArgs(projectRoot).resolves({gems: gemsForRake});
    documentationScaffolder.default.returns(documentation);

    const result = await scaffold({projectRoot});

    assert.calledWith(rubyVersionScaffolder.default, projectRoot);
    assert.calledWith(gemsScaffolder.default, projectRoot, gemsForRake);
    assert.equal(result.verificationCommand, 'rake');
    assert.equal(result.documentation, documentation);
  });
});
