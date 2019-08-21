import {resolve} from 'path';
import {info} from '@travi/cli-messages';
import {copyFile} from '../thirdparty-wrappers/fs';

export default async function (projectRoot) {
  info('Configuring Rake');

  await copyFile(resolve(__dirname, '..', 'templates', 'Rakefile.rb'), `${projectRoot}/Rakefile`);

  return {gems: ['rake']};
}
