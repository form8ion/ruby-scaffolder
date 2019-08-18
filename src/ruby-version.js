import {promises} from 'fs';

export default async function (projectRoot) {
  await promises.writeFile(`${projectRoot}/.ruby-version`, '2.6.3');
}
