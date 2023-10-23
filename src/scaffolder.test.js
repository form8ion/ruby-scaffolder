import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import * as rubyVersionScaffolder from './ruby-version.js';
import * as rakeScaffolder from './rake.js';
import * as gemsScaffolder from './gems.js';
import * as documentationScaffolder from './documentation.js';
import * as lintingScaffolder from './linting.js';
import {scaffold} from './scaffolder.js';

describe('scaffolder', () => {
  beforeEach(() => {
    vi.mock('./ruby-version');
    vi.mock('./rake');
    vi.mock('./gems');
    vi.mock('./documentation');
    vi.mock('./linting');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should scaffold the project', async () => {
    const projectRoot = any.string();
    const gemsForRake = any.listOf(any.word);
    const gemsForLinting = any.listOf(any.word);
    const documentation = any.simpleObject();
    when(rakeScaffolder.default).calledWith(projectRoot).mockResolvedValue({gems: gemsForRake});
    when(lintingScaffolder.default).calledWith(projectRoot).mockResolvedValue({gems: gemsForLinting});
    documentationScaffolder.default.mockReturnValue(documentation);

    const result = await scaffold({projectRoot});

    expect(rubyVersionScaffolder.default).toHaveBeenCalledWith(projectRoot);
    expect(gemsScaffolder.default).toHaveBeenCalledWith(projectRoot, [...gemsForRake, ...gemsForLinting]);
    expect(result.verificationCommand).toEqual('rake');
    expect(result.documentation).toEqual(documentation);
  });
});
