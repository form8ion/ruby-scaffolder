import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldRake from './rake.js';

describe('Rake', () => {
  beforeEach(() => {
    vi.mock('node:fs');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should generate the Rakefile', async () => {
    const projectRoot = any.string();

    const results = await scaffoldRake(projectRoot);

    expect(results.gems).toEqual(['rake']);
    expect(fs.copyFile).toHaveBeenCalledWith(
      resolve(__dirname, '..', 'templates', 'Rakefile.rb'),
      `${projectRoot}/Rakefile`
    );
  });
});
