---
title: tmux session management
---

### Start a new session

```zsh
tmux new -s hello
```

### Attach to last session

```zsh
tmux a
```

### Attach to specific session

```zsh
tmux a -t hello
```

### Kill session

```zsh
tmux kill-session -t hello
```

### Detach from session

{% tmuxPrefix %} {% kbd "d" %}