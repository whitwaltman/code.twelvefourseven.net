#!/bin/zsh

# check if an argument was provided
if [ -z "$1" ]; then
    echo "Usage: ./new.sh <slug>"
    exit 1
fi

# ensure input is lowercase for filename
# (:l) = zsh modifier for lowercase
SLUG="${1:l}"

# capitalize first letter for metadata title
# (:C) = zsh modifier for capitalizing first letter
TITLE="${(C)1}"

# set date  and path
DATE=$(date +"%Y-%m-%d")
FILENAME="content/ref/$SLUG.md"

cat <<EOF > "$FILENAME"
+++
title = "$TITLE"
date = $DATE
weight = 0
+++
EOF

echo "Created new page: $FILENAME with title: \"$TITLE\""
