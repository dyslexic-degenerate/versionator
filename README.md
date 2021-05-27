# versionator

Embeddable versions in [crystal](https://crystal-lang.org/) applications at compile time. Convention over configuration with [git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

<img src="eric-krull-Ejcuhcdfwrs-unsplash.jpg" alt="Photo of chairs by James Wheeler" />
Photo by <a href="https://unsplash.com/@ekrull?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eric Krull</a> on <a href="https://unsplash.com/s/photos/cyborg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## Project Health Status

[![CI](https://github.com/dyslexic-degenerate/versionator/actions/workflows/ci.yml/badge.svg)](https://github.com/dyslexic-degenerate/versionator/actions/workflows/ci.yml) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://dyslexic-degenerate.github.io/versionator/) [![GitHub tag](https://img.shields.io/github/v/tag/dyslexic-degenerate/versionator)](https://github.com/dyslexic-degenerate/versionator/releases)

## Quick start

Add the dependency to your `shard.yml` and install versionator.

```yaml
dependencies:
  versionator:
    github: dyslexic-degenerate/versionator
```

```sh
> shards install
```

Require versionator and use it to access the version:

```crystal
require "versionator"

module MyApp
  puts "version: #{Versionator.version}"
end
```

Make sure you have git tags:

```sh
> git tag

v1.0.0
v1.0.1

# set one if not (don't forget to push it)
> git tag v1.0.1
```

Build your application:

```sh
> shards build

> ./bin/myapp

version: v1.0.1
```

Or build your application and embed your custom version:

```sh
> VERSIONATOR=x.y.z shards build

> ./bin/myapp

version: x.y.z
```

## Fun Stuff...

Versionator leverages convention over configuration by extracting the current version at compile time directly from git using `git describe --tags --dirty`.

For details on `git describe` and how it works: https://git-scm.com/docs/git-describe

This versioning technique extracts the most recent tag set using `git tag`.

In order for this to work you must have at least one tag set.

Don't forget to `git push` and `git fetch` your tags.

For example:

```sh
# When the most recent tag matches the most recent commit with a clean working tree
> git describe --tags --dirty
v1.0.0

# When the most recent tag matches the most recent commit with a dirty working tree
> git describe --tags --dirty
v1.0.0-dirty

# When the most recent tag is 4 commits behind the most recent commit with a clean working tree
> git describe --tags --dirty
v1.0.0-4-gc3a421b

# When the most recent tag is 4 commits behind the most recent commit with a dirty working tree
> git describe --tags --dirty
v1.0.0-7-gc3a421b-dirty
```

This versioning technique allows you to get detailed information about the current code being executed within the compiled application.

## Common Usage

Leverage `git describe --tags --dirty` to provide
versioning information. All you need are `git tag`'s and `Versionator.version`.

For example:

```sh
> shards build

> ./bin/myapp

v1.0.0-7-gc3a421b-dirty

# sanity check :)
> git describe --tags --dirty
v1.0.0-7-gc3a421b-dirty
```

When you don't have git for some reason during compilation (not that unusual for release build chains) you can use the VERSIONATOR environment variable to embed the version:

```sh
> VERSIONATOR=v1.0.1 shards build

> ./bin/myapp

version: v1.0.1
```

## Contributing

1. Fork it (<https://github.com/dyslexic-degenerate/versionator/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Dyslexic Degenerate](https://github.com/dyslexic-degenerate) - creator and maintainer
