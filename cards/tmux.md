---
title: tmux
tags:
- quick-ref
---

**Note:** I use `C-a` as my prefix instead of C-b

See more [here](https://tmuxcheatsheet.com/)


## Sessions

1. Start a new session

```sh
tmux
tmux new
tmux new -s <session_name>
```

2. Re-attach to existing session from command line

```sh
tmux a # reattach to last session
tmux a -t <session_name>
```

3. Rename session

```sh
tmux rename -t <old_name> <new>name>
```

4. Rename session inside session

```
C-a $
```

4. Detach from session

```
C-a d
```


6. Kill session

```sh
tmux kill-ses -t <session_name>
```

7. Next / previous session

```
C-a n
C-a p
```

## Windows

1. Create new window inside session

```
C-a c
```

2. Rename window inside session

```
C-a ,
```

3. Close current window

```
C-a &
```

4. Preview windows

```
C-a w
```

5. Last/next window

```
C-a l
C-a n
```