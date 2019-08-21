import {resolve} from 'path';
import {info} from '@travi/cli-messages';
import {copyFile} from '../thirdparty-wrappers/fs';
import execa from '../thirdparty-wrappers/execa';

export default async function (projectRoot) {
  info('Configuring gem dependencies');

  await copyFile(resolve(__dirname, '..', 'templates', 'Gemfile.rb'), `${projectRoot}/Gemfile`);

  await execa('bundle', ['install']);
}
