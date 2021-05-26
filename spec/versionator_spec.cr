require "./spec_helper"

describe Versionator do
  it "has access to the version" do
    Versionator.version.should_not be_nil
  end

  {% if env("VERSIONATOR") %}
    it "is VERSIONATOR when set" do
      Versionator.version.should eq({{ env("VERSIONATOR") }})
    end
  {% else %}
    it "is git describe --tags --dirty when VERSIONATOR not set" do
      gitversion = `git describe --tags --dirty`

      $?.success?.should be_true
      Versionator.version.should eq(gitversion)
    end
  {% end %}
end
