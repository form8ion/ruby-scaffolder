import {resolve} from 'node:path';
import {promises as fs} from 'node:fs';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldLinting from './linting';

describe('linting', () => {
  beforeEach(() => {
    vi.mock('node:fs');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define the markdown lint style', async () => {
    const projectRoot = any.string();

    const results = await scaffoldLinting(projectRoot);

    expect(results.gems).toEqual(['mdl']);
    expect(fs.copyFile).toHaveBeenCalledWith(
      resolve(__dirname, '..', 'templates', 'markdownlint-style.rb'),
      `${projectRoot}/markdownlint-style.rb`
    );
  });
});
