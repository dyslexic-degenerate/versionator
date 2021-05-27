# `Versionator` is a utility module for embeding versions into an application at
# compile time.
#
# It leverages smart defaults (convention over configuration) at compile time by
# providing the version pulled from `git tag` when available.
module Versionator
  {% if env("VERSIONATOR") %}
    # returns either the version set with `ENV[VERSIONATOR]` or the most recent
    # tag via `git describe --tags --dirty`
    def self.version
      {{ env("VERSIONATOR") }}
    end
  {% else %}
    # returns either the version set with `ENV[VERSIONATOR]` or the most recent
    # tag via `git describe --tags --dirty`
    def self.version
      {{ run("./getgit").stringify }}
    end
  {% end %}
end
