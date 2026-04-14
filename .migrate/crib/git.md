---
title: Git quick ref
code: tru
---

## branches

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

## remote

List existing remotes (`-v` == verbose)

```bash
git remote -v
git rv # alias
```

```sh
git remote set-url origin git://new.url.here
```

```sh
git remote remove origin
```

## tracking

Stop tracking a file; remove from the index (cache)

```sh
git rm --cached myFile.js
```

Remove all unstaged changes in working directory but leave all staged changes

```sh
git restore
```

## reset

```sh
git reflog
git reset --hard <SHA>
git reset --hard HEAD@{0}
```


