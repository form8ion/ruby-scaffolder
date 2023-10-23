import {promises as fs} from 'node:fs';
import {execa} from 'execa';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldRubyVersion from './ruby-version.js';

describe('ruby-version', () => {
  beforeEach(() => {
    vi.mock('node:fs');
    vi.mock('execa');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the version file', async () => {
    const projectRoot = any.string();

    await scaffoldRubyVersion(projectRoot);

    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/.ruby-version`, '2.6.3');
    expect(execa).toHaveBeenCalledWith('rbenv', ['install', '--skip-existing']);
  });
});
