---
title: Git crib sheet
code: true
tabs: false
---

Note: I have `br` set as an alias for `branch`.

```sh
# rename branch
git br -m <new-name>
```

```sh
# delete branch locally (must be on other branch)
git br -d <branch-to-delete>
```

```sh
# delete remote branch
git push origin -d <branch-to-delete>
```

```sh
# list remote branches
git br -r
```