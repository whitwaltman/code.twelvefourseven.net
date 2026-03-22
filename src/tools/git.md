---
title: Git
created: 2026-02-21T20:40:20.763Z
---

My git aliases

```zsh
git alias

alias.st status
alias.lo log --oneline
alias.last log -1 HEAD --stat
alias.cm commit -m
alias.rv remote -v
alias.d diff
alias.sw switch
alias.br branch
alias.co checkout
alias.au add --update
alias.alias config --get-regexp ^alias\.
```

1. Get git status (short)

```sh
git st -s
```

2. Create a new branch and switch to it

```sh
git sw -c
```

3. Stop tracking a file, remove it from index/cache

```sh
git rm --cached <file>
```

4. Remove all unstaged changes in current directory but leave staged changes alone

```sh
git restore .
```