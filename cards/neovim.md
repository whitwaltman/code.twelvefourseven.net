---
title: Neovim
starred: true
tags:
  - quickref
created: 2026-02-23T19:10:41.465Z
---
<space>zo = open all folds
<space>zs = close (shut) all folds

(source: fold.lua)

* * *

gcc = toggle comment
14gbc = toggle comment for current line and next 13 lines

* * *

<space>ff = Telescope find_files
<space>fg = Telescope live grep

* * *

health check?

* * *

dotfiles stored in ~/dotfiles/neovim/.config/nvim

```sh
init.lua
lazy-lock.json
lua/
	plugins.lua
	config/
		fold.lua
		lazy.lua
		options.lua
		remap.lua
```

run `:Lazy sync` to install new plugins

manually source config with `:source %`

* * *

check filetype with `:set filetype?`
