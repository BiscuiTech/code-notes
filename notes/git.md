---
title: Git
tags:
  - git
---

# How to fix empty objects
```shell
find .git/objects/ -type f -empty | xargs rm
git fetch -p
git fsck --full
```

# Alias
```shell
[alias]
  gone = ! "git fetch -p && git for-each-ref --format '%(refname:short) %(upstream:track)' | awk '$2 == \"[gone]\" {print $1}' | xargs -r git branch -D"
```
