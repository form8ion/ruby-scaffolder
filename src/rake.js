import {resolve} from 'node:path';
import {promises as fs} from 'node:fs';
import {info} from '@travi/cli-messages';

export default async function (projectRoot) {
  info('Configuring Rake');

  await fs.copyFile(resolve(__dirname, '..', 'templates', 'Rakefile.rb'), `${projectRoot}/Rakefile`);

  return {gems: ['rake']};
}
