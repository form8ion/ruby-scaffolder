import {resolve} from 'node:path';
import {promises as fs} from 'node:fs';
import {info} from '@travi/cli-messages';

export default async function (projectRoot) {
  info('Configuring Linting');

  await fs.copyFile(
    resolve(__dirname, '..', 'templates', 'markdownlint-style.rb'),
    `${projectRoot}/markdownlint-style.rb`
  );

  return {gems: ['mdl']};
}
