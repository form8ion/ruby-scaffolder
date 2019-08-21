import {resolve} from 'path';
import {info} from '@travi/cli-messages';
import {copyFile} from '../thirdparty-wrappers/fs';

export default async function (projectRoot) {
  info('Configuring Linting');

  await copyFile(
    resolve(__dirname, '..', 'templates', 'markdownlint-style.rb'),
    `${projectRoot}/markdownlint-style.rb`
  );

  return {gems: ['mdl']};
}
