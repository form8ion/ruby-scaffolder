import {promises} from 'fs';
import execa from '../thirdparty-wrappers/execa';

export default async function (projectRoot) {
  await promises.writeFile(`${projectRoot}/.ruby-version`, '2.6.3');

  await execa('rbenv', ['install', '--skip-existing']);
}
