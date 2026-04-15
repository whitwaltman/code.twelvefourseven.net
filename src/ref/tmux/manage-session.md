---
title: manage session
tags: ["chunk", "ref", "cli"]
parent: tmux
---

New session
```bash
tmux new -s hello
```

Reattach to existing session
```bash
tmux a -t hello
```

Kill session
```bash
tmux kill-session -t hello
```