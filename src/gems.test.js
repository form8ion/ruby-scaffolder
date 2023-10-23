import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';
import {execa} from 'execa';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldGems from './gems.js';

describe('Gems', () => {
  beforeEach(() => {
    vi.mock('node:fs');
    vi.mock('execa');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should generate the Gemfile', async () => {
    const projectRoot = any.string();

    await scaffoldGems(projectRoot);

    expect(fs.copyFile).toHaveBeenCalledWith(
      resolve(__dirname, '..', 'templates', 'Gemfile.rb'),
      `${projectRoot}/Gemfile`
    );
    expect(execa).toHaveBeenCalledWith('bundle', ['install']);
  });
});
