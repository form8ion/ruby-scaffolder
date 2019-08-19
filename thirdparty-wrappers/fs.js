import {promisify} from 'util';
import {copyFile as copyFileCallback} from 'fs';

export const copyFile = promisify(copyFileCallback);
