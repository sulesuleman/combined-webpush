#!/usr/bin/env bash

# Dependencies:
# uglify-js 3.3.10
# uglify-es
# git

# Workflow:
# edit JS
# - compress: automate, only if on "local"
# commit
# merge
# push
# - ssh in: not required, when the deployment is done over ssh -t from local. TODO.
# deploy

echo 'WATCHING FOR JS CHANGES...'

DIR=websites/templates/websites
LIVE_BRANCH='live'

function custom_minify {

  while read data
  do
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [[ "$BRANCH" != "$LIVE_BRANCH" ]]; then

      echo "COMPRESSED AT $(date +"%D %T")"
      cat $DIR/network.js $DIR/cookie.js $DIR/prompt.js $DIR/shopify.js $DIR/core.js > $DIR/sdk.js
      uglifyjs $DIR/sdk.js -m > $DIR/sdk.min.tmp.js
      cat $DIR/sdk.min.tmp.js $DIR/init.js > $DIR/sdk.min.js
      rm $DIR/sdk.min.tmp.js
      rm $DIR/sdk.js
    else
      echo "$LIVE_BRANCH"
      echo "$BRANCH"
      echo "Wrong branch. Skipping."
    fi
  done
}

fswatch -o $DIR/*.js \
-e $DIR/sdk.js \
-e $DIR/sdk.min.tmp.js \
-e $DIR/sdk.min.js | custom_minify

