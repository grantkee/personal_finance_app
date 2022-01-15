#!/bin/bash
set -e

# remove pre-existing server.pid for rails
rm -f /myapp/tmp/pids/server.pid

# exec the container's CMD
exec "@"