gitversion = `git describe --tags --dirty`
puts $?.success? ? gitversion : "unknown"
