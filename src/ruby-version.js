import {promises as fs} from 'node:fs';
import {execa} from 'execa';
import {info} from '@travi/cli-messages';

export default async function (projectRoot) {
  info('Configuring Ruby version');

  await fs.writeFile(`${projectRoot}/.ruby-version`, '2.6.3');
  info('Defined the preferred Ruby version', {level: 'secondary'});

  await execa('rbenv', ['install', '--skip-existing']);
  info('Installed expected Ruby version', {level: 'secondary'});
}
