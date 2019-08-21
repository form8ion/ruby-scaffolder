# ruby-scaffolder

opinionated scaffolder for Ruby projects

<!-- status badges -->
[![Build Status][ci-badge]][ci-link]

## Usage

<!-- consumer badges -->
[![npm][npm-badge]][npm-link]
[![Try @form8ion&#x2F;ruby-scaffolder on RunKit][runkit-badge]][runkit-link]
[![MIT license][license-badge]][license-link]

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

<!-- contribution badges -->
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Greenkeeper badge](https://badges.greenkeeper.io/form8ion/ruby-scaffolder.svg)](https://greenkeeper.io/)

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
[npm-badge]: https://img.shields.io/npm/v/@form8ion/ruby-scaffolder.svg
[runkit-link]: https://npm.runkit.com/@form8ion/ruby-scaffolder
[runkit-badge]: https://badge.runkitcdn.com/@form8ion/ruby-scaffolder.svg
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/form8ion/ruby-scaffolder.svg
[ci-link]: https://travis-ci.com/form8ion/ruby-scaffolder
[ci-badge]: https://img.shields.io/travis/com/form8ion/ruby-scaffolder/master.svg
[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[PRs-link]: http://makeapullrequest.com
[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
