list all global git aliases

```zsh
git config --get-regexp ^alias
```

[source](https://stackoverflow.com/questions/7066325/list-git-aliases)

for reference, i currently have the following git aliases:

```zsh
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