import {dirname, resolve} from 'node:path';
import {promises as fs} from 'node:fs';
import {info} from '@travi/cli-messages';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));        // eslint-disable-line no-underscore-dangle

export default async function (projectRoot) {
  info('Configuring Linting');

  await fs.copyFile(
    resolve(__dirname, '..', 'templates', 'markdownlint-style.rb'),
    `${projectRoot}/markdownlint-style.rb`
  );

  return {gems: ['mdl']};
}
