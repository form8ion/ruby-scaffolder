import {assert} from 'chai';
import {scaffold} from './scaffolder';

suite('scaffolder', () => {
  test('that the project is scaffolded', async () => {
    const result = await scaffold();

    assert.equal(result.verificationCommand, 'rake');
  });
});
