// import bddStdIn from 'bdd-stdin';
import {assert} from 'chai';
import any from '@travi/any';
import {Given, Then, When} from 'cucumber';
import {scaffold} from '../../../../src';

let scaffoldResult;

Given('the default answers are chosen', async function () {
  return undefined;
});

When(/^the project is scaffolded$/, async function () {
  // const shouldBeScopedAnswer = 'Public' === this.visibility ? ['\n'] : [];
  this.projectName = any.word();

  // bddStdIn(...[
  //   '\n',
  //   // ...this.projectTypeAnswer,
  //   // ...shouldBeScopedAnswer,
  //   // '\n',
  //   // '\n',
  //   // '\n',
  //   // '\n',
  //   // ...this.unitTestAnswer,
  //   // ...this.integrationTestAnswer,
  //   // ...this.ciAnswer ? this.ciAnswer : [],
  //   // ...'application' === this.projectType ? this.applicationTypeAnswer : [],
  //   // ...this.transpilationLintAnswer ? this.transpilationLintAnswer : []
  // ]);

  scaffoldResult = await scaffold({
    projectRoot: process.cwd(),
    projectName: this.projectName,
    visibility: this.visibility,
    license: any.string(),
    vcs: this.vcs,
    ciServices: {[any.word()]: {scaffolder: foo => ({foo}), public: true}}
  });
});

Then('the expected results are returned to the project scaffolder', async function () {
  assert.equal(scaffoldResult.verificationCommand, 'rake');
});
