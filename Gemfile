# Only used for previewing the site on your own computer (`bundle exec jekyll serve`).
# GitHub Pages ignores this file and builds with its own, matching versions.
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "webrick"  # `jekyll serve` needs this on Ruby 3+

# Windows has no built-in time zone database
platforms :windows, :jruby do
  gem "tzinfo-data"
  gem "wdm", ">= 0.1.0"  # faster file-change detection while serving
end
