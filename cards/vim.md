+++
title = "Vim"
date = 2026-02-22
updated = 2026-02-25
weight = 4
+++

Note that everything that works in Vim should also work in Neovim. Neovim is a superset of Vim.

:noh
:%y
:m+2 = move current line down by 2
ci< = change inside <bracket>

0 = jump to start of line
$ = jump to end of line
gg = jump to beginning of file
12gg = jump to line 12
G = jump to end of file

<space> = unfold
za = toggle fold
zA = toggle all folds
zc = close fold
zC = close all folds
zo = open fold
zO = open all folds

* * *

## buffers

[buffers 101](https://medium.com/usevim/vim-101-buffers-cf22c0cc37df)

* * *

p, P, substitution command(?); /, n, N