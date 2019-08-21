import {assert} from 'chai';
import scaffoldDocumentation from './documentation';

suite('documentation', () => {
  test('that contribution details are defined', () => {
    const documentation = scaffoldDocumentation();

    assert.equal(
      documentation.contributing,
      `### Dependencies

\`\`\`sh
bundle install
\`\`\`

### Verification

\`\`\`sh
rake
\`\`\``
    );
  });
});
