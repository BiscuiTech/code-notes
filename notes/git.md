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