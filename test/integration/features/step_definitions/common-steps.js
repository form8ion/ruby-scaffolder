import {exists, promises as fsPromises} from 'fs';
import {promisify} from 'util';
import {resolve} from 'path';
import stubbedFs from 'mock-fs';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import {After, Before, Given, Then, When} from '@cucumber/cucumber';
import * as execa from '../../../../thirdparty-wrappers/execa';
import {scaffold} from '../../../../src';

let scaffoldResult;

const {readFile} = fsPromises;
const existsAsync = promisify(exists);

Before(async function () {
  stubbedFs({
    templates: {
      'Rakefile.rb': await readFile(resolve(__dirname, '../../../../', 'templates/Rakefile.rb')),
      'Gemfile.rb': await readFile(resolve(__dirname, '../../../../', 'templates/Gemfile.rb')),
      'markdownlint-style.rb': await readFile(resolve(__dirname, '../../../../', 'templates/markdownlint-style.rb'))
    }
  });

  this.sinonSandbox = sinon.createSandbox();
  this.sinonSandbox.stub(execa, 'default');
});

After(function () {
  stubbedFs.restore();
});

Given('the default answers are chosen', async function () {
  return undefined;
});

When(/^the project is scaffolded$/, async function () {
  this.projectName = any.word();

  scaffoldResult = await scaffold({
    projectRoot: process.cwd(),
    projectName: this.projectName,
    visibility: this.visibility,
    license: any.string(),
    vcs: this.vcs,
    ciServices: {[any.word()]: {scaffolder: foo => ({foo}), public: true}}
  });
});

Then('the expected files are generated', async function () {
  const projectRoot = process.cwd();
  const [rubyVersion, rakefileExists, gemfileExists] = await Promise.all([
    readFile(`${projectRoot}/.ruby-version`),
    existsAsync(`${projectRoot}/Rakefile`),
    existsAsync(`${projectRoot}/Gemfile`)
  ]);

  assert.equal(rubyVersion.toString(), '2.6.3');
  assert.isTrue(rakefileExists);
  assert.isTrue(gemfileExists);
});

Then('the expected results are returned to the project scaffolder', async function () {
  assert.equal(scaffoldResult.verificationCommand, 'rake');
});
