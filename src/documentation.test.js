import {describe, expect, it} from 'vitest';

import scaffoldDocumentation from './documentation';

describe('documentation', () => {
  it('should define contribution details', () => {
    const documentation = scaffoldDocumentation();

    expect(documentation.contributing).toEqual(
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
