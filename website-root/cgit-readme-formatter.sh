#! /bin/sh

if echo "$1" | grep -qi '\.md$'
then markdown -
else cat -
fi
