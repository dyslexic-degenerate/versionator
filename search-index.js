crystal_doc_search_index_callback({"repository_name":"versionator","body":"# versionator\n\nEmbeddable versions in [crystal](https://crystal-lang.org/) applications at compile time. Convention over configuration with [git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging).\n\n<img src=\"eric-krull-Ejcuhcdfwrs-unsplash.jpg\" alt=\"Photo of chairs by James Wheeler\" />\nPhoto by <a href=\"https://unsplash.com/@ekrull?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Eric Krull</a> on <a href=\"https://unsplash.com/s/photos/cyborg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n\n## Project Health Status\n\n[![CI](https://github.com/dyslexic-degenerate/versionator/actions/workflows/ci.yml/badge.svg)](https://github.com/dyslexic-degenerate/versionator/actions/workflows/ci.yml) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://dyslexic-degenerate.github.io/versionator/) [![GitHub tag](https://img.shields.io/github/v/tag/dyslexic-degenerate/versionator)](https://github.com/dyslexic-degenerate/versionator/releases)\n\n## Quick start\n\nAdd the dependency to your `shard.yml` and install versionator.\n\n```yaml\ndependencies:\n  versionator:\n    github: dyslexic-degenerate/versionator\n```\n\n```sh\n> shards install\n```\n\nRequire versionator and use it to access the version:\n\n```crystal\nrequire \"versionator\"\n\nmodule MyApp\n  puts \"version: #{Versionator.version}\"\nend\n```\n\nBuild your application and embed your version:\n\n```sh\n> VERSIONATOR=x.y.z shards build\n\n> ./bin/myapp\n\nversion: x.y.z\n```\n\n## Fun Stuff...\n\nVersionator leverages convention over configuration by extracting the current version at compile time directly from git using `git describe --tags --dirty`.\n\nFor details on `git describe` and how it works: https://git-scm.com/docs/git-describe\n\nThis versioning technique extracts the most recent tag set using `git tag`.\n\nIn order for this to work you must have at least one tag set.\n\nDon't forget to `git push` and `git fetch` your tags.\n\nFor example:\n\n```sh\n# When the most recent tag matches the most recent commit with a clean working tree\n> git describe --tags --dirty\nv1.0.0\n\n# When the most recent tag matches the most recent commit with a dirty working tree\n> git describe --tags --dirty\nv1.0.0-dirty\n\n# When the most recent tag is 4 commits behind the most recent commit with a clean working tree\n> git describe --tags --dirty\nv1.0.0-4-gc3a421b\n\n# When the most recent tag is 4 commits behind the most recent commit with a dirty working tree\n> git describe --tags --dirty\nv1.0.0-7-gc3a421b-dirty\n```\n\nThis versioning technique allows you to get detailed information about the current code being executed within the compiled application.\n\n## Common Usage\n\nLeverage `git describe --tags --dirty` to provide\nversioning information. All you need are `git tag`'s and `Versionator.version`.\n\nFor example:\n\n```sh\n> shards build\n\n> ./bin/myapp\n\nv1.0.0-7-gc3a421b-dirty\n\n# sanity check :)\n> git describe --tags --dirty\nv1.0.0-7-gc3a421b-dirty\n```\n\nWhen you don't have git for some reason during compilation (not that unusual for release build chains) you can use the VERSIONATOR environment variable to embed the version:\n\n```sh\n> VERSIONATOR=v1.0.1 shards build\n\n> ./bin/myapp\n\nversion: v1.0.1\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/dyslexic-degenerate/versionator/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Dyslexic Degenerate](https://github.com/dyslexic-degenerate) - creator and maintainer\n","program":{"html_id":"versionator/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"versionator","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"versionator/Versionator","path":"Versionator.html","kind":"module","full_name":"Versionator","name":"Versionator","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/versionator.cr","line_number":6,"url":"https://github.com/dyslexic-degenerate/versionator/blob/d4debcc9f6677a61d8b3a04bdf2d5b519f467197/src/versionator.cr#L6"}],"repository_name":"versionator","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"`Versionator` is a utility module for embeding versions into an application at\ncompile time.\n\nIt leverages smart defaults (convention over configuration) at compile time by\nproviding the version pulled from `git tag` when available.","summary":"<p><code><a href=\"Versionator.html\">Versionator</a></code> is a utility module for embeding versions into an application at compile time.</p>","class_methods":[{"id":"version-class-method","html_id":"version-class-method","name":"version","doc":"returns either the version set with `ENV[VERSIONATOR]` or the most recent\ntag via `git describe --tags --dirty`","summary":"<p>returns either the version set with <code>ENV[VERSIONATOR]</code> or the most recent tag via <code>git describe --tags --dirty</code></p>","abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/versionator.cr","line_number":7,"url":"https://github.com/dyslexic-degenerate/versionator/blob/d4debcc9f6677a61d8b3a04bdf2d5b519f467197/src/versionator.cr#L7"},"def":{"name":"version","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"gitversion = `git describe --tags --dirty`\n$?.success? ? gitversion : \"unknown\"\n"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}})