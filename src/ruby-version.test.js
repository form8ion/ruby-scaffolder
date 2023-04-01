import {promises as fs} from 'node:fs';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import * as execa from '../thirdparty-wrappers/execa';
import scaffoldRubyVersion from './ruby-version';

describe('ruby-version', () => {
  beforeEach(() => {
    vi.mock('node:fs');
    vi.mock('../thirdparty-wrappers/execa');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the version file', async () => {
    const projectRoot = any.string();

    await scaffoldRubyVersion(projectRoot);

    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/.ruby-version`, '2.6.3');
    expect(execa.default).toHaveBeenCalledWith('rbenv', ['install', '--skip-existing']);
  });
});
