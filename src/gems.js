import {dirname, resolve} from 'node:path';
import {promises as fs} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {execa} from 'execa';
import {info} from '@travi/cli-messages';

const __dirname = dirname(fileURLToPath(import.meta.url));        // eslint-disable-line no-underscore-dangle

export default async function (projectRoot) {
  info('Configuring gem dependencies');

  await fs.copyFile(resolve(__dirname, '..', 'templates', 'Gemfile.rb'), `${projectRoot}/Gemfile`);

  await execa('bundle', ['install']);
}
