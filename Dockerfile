FROM ruby:3.2-slim

WORKDIR /app

# Install build dependencies and libcurl for html-proofer
RUN apt-get update && apt-get install -y build-essential libcurl4-openssl-dev git

# Install Jekyll and all required gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the application
COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]