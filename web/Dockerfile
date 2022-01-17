# syntax=docker/dockerfile:1
FROM ruby:2.6.3
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
COPY . /app/

RUN apt-get update -qq \
&& apt-get install -y curl build-essential libpq-dev \
 nodejs postgresql-client &&\
  curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn
  # apt-get update && apt-get install -y nodejs yarn && \
  # chmod +x /app/entrypoint.sh
# ADD . /app
RUN gem install bundler
RUN bundle install
EXPOSE 3000
# ENTRYPOINT ["/app/entrypoint.sh"]