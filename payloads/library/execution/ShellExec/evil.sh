!#/bin/bash

# opens browsers to the bunny's index.html page

[[ "$(uname)" == "Darwin" ]] && open http://172.16.64.1
[[ "$(uname)" == "Linux" ]] && xdg-open http://172.16.64.1
