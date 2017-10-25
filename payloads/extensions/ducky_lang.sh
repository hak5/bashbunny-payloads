#!/bin/bash

function DUCKY_LANG() {
  [[ -z "$1" ]] && exit 1 # parameter must be set

  export DUCKY_LANG="$1"
}
export -f DUCKY_LANG
