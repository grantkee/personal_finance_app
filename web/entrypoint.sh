#!/bin/bash
set -e

# remove pre-existing server.pid for rails
rm -f /myapp/tmp/pids/server.pid

bundle exec rails db:create db:seed
# rm -f tmp/pids/server.pid
bundle exec rails s -p 3000 -b 0.0.0.0