import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import * as execa from '../thirdparty-wrappers/execa';
import scaffoldGems from './gems';

describe('Gems', () => {
  beforeEach(() => {
    vi.mock('node:fs');
    vi.mock('../thirdparty-wrappers/execa');
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
    expect(execa.default).toHaveBeenCalledWith('bundle', ['install']);
  });
});
