import {resolve} from 'node:path';
import {promises as fs} from 'node:fs';
import {info} from '@travi/cli-messages';
import execa from '../thirdparty-wrappers/execa';

export default async function (projectRoot) {
  info('Configuring gem dependencies');

  await fs.copyFile(resolve(__dirname, '..', 'templates', 'Gemfile.rb'), `${projectRoot}/Gemfile`);

  await execa('bundle', ['install']);
}
