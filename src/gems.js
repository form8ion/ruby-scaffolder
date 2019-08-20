import {resolve} from 'path';
import {copyFile} from '../thirdparty-wrappers/fs';
import execa from '../thirdparty-wrappers/execa';

export default async function (projectRoot) {
  await copyFile(resolve(__dirname, '..', 'templates', 'Gemfile.rb'), `${projectRoot}/Gemfile`);

  await execa('bundle', ['install']);
}
