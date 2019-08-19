import {resolve} from 'path';
import {copyFile} from '../thirdparty-wrappers/fs';

export default async function (projectRoot) {
  await copyFile(resolve(__dirname, '..', 'templates', 'Rakefile.rb'), `${projectRoot}/Rakefile`);

  return {gems: ['rake']};
}
