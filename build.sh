#!/usr/bin/env bash

mkdir -p build
cp src/tabbed-form.{css,js} build

export CSS=$(cat src/tabbed-form.css)
export JS=$(cat src/tabbed-form.js)
export CONTENT=$(cat src/tabbed-form-content.html)

envsubst < src/tabbed-form-dev.tmpl  > build/tabbed-form-dev.html
envsubst < src/tabbed-form-squarespace.tmpl  > build/tabbed-form-squarespace.html
