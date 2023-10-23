# ruby-scaffolder

opinionated scaffolder for Ruby projects

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/ruby-scaffolder on RunKit][runkit-badge]][runkit-link]
[![MIT license][license-badge]][license-link]
![node][node-badge]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/ruby-scaffolder --save
```

### Dependencies

It is expected that [rbenv](https://github.com/rbenv/rbenv) is available for
managing [Ruby](https://www.ruby-lang.org/en/) versions. This scaffolder will
leverage [rbenv](https://github.com/rbenv/rbenv) to install the version of
[Ruby](https://www.ruby-lang.org/en/) that is defined in the generated
`.ruby-version` file.

It is also expected that [bundler](https://bundler.io) is available for
installing gems from a [Gemfile](https://bundler.io/v2.0/man/gemfile.5.html).
It can be installed automatically in [rbenv](https://github.com/rbenv/rbenv)
managed [Ruby](https://www.ruby-lang.org/en/) versions by [including it in your
`~/.rbenv/default-gems` file](https://github.com/rbenv/rbenv-default-gems#usage)
when you have the [`rbenv-default-gems` plugin](https://github.com/rbenv/rbenv-default-gems)
installed.

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/@form8ion/ruby-scaffolder

[npm-badge]: https://img.shields.io/npm/v/@form8ion/ruby-scaffolder?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/ruby-scaffolder

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/ruby-scaffolder.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/ruby-scaffolder.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/form8ion/ruby-scaffolder/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/ruby-scaffolder/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/form8ion/ruby-scaffolder

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/ruby-scaffolder?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[node-badge]: https://img.shields.io/node/v/@form8ion/ruby-scaffolder?logo=node.js
