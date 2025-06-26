source "https://rubygems.org"

gem "jekyll", "~> 4.3.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-paginate", "~> 1.1.0"
  # gem "jekyll-paginate-v2", "~> 3.0"  # Uncomment if needed
  gem "jekyll-seo-tag", "~> 2.8.0"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "webrick", "~> 1.8"

# Fix for rexml
gem "strscan", "~> 3.0.7"
gem "rexml", "~> 3.2.7"

# Testing dependencies
group :test, :development do
  gem "rspec", "~> 3.12"
  gem "html-proofer", "~> 5.0"
  gem "nokogiri", "~> 1.15"
end