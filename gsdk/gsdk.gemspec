# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'gsdk/version'

Gem::Specification.new do |spec|
  spec.name          = "gsdk"
  spec.version       = Gsdk::VERSION
  spec.authors       = ["Tim"]
  spec.email         = ["timshingyu@gmail.com"]

  spec.summary       = %q{Get Shit Done for Rails Version}
  spec.description   = %q{Get Shit Done for Rails Version is a rubygems. Packed with useful rails generators to generate your rails view in no time. One more thing, it's production ready, so no need to worry about the assets pipeline issues on production server anymore.}
  spec.homepage      = "https://uiready.io/items/get-shit-done-rails-version"

  # Prevent pushing this gem to RubyGems.org by setting 'allowed_push_host', or
  # delete this section to allow pushing this gem to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "https://packagecloud.io"
  else
    raise "RubyGems 2.0 or newer is required to protect against public gem pushes."
  end

  spec.files = Dir["{app,lib}/**/*"].reject{ |f|
                  f['app/assets/javascripts/bootstrap3/bootstrap.min.js'] ||
                  f['app/assets/javascripts/jquery/jquery-1.10.2.js'] ||
                  f['app/assets/javascripts/jquery/jquery-ui.custom.min.js'] ||
                  f['app/assets/stylesheets/bootstrap3/bootstrap.min.css'] } +
               Dir["*.gemspec"] +
               ["README.md"]

  spec.require_paths = ["lib"]

  spec.add_dependency "rails", ">= 3.1"

  spec.add_development_dependency "bundler", "~> 1.10"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec"
  spec.add_development_dependency "pry"

  spec.post_install_message = <<-DOC
    Congratulation, Get Shit Done for Rails Version has been installed in your local machine.

    You can now run the following generator to install Get Shit Done to your rails app.

    rails generate gsdk:install
  DOC

end
