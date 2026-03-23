---
title: Git crib sheet
code: true
tabs: false
---

## branch

Note: I have `br` set as an alias for `branch`.

```zsh
git br

# rename branch
git br -m <new-name>

# delete branch locally (must be on other branch)
git br -d <branch-to-delete>

# delete remote branch
git push origin -d <branch-to-delete>

# list remote branches
git br -r
```