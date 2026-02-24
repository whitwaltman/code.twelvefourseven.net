+++
title = "tmux"
date = 2026-02-24
weight = 3
+++

**Note:** I use `C-a` as my prefix instead of C-b

1. Re-attach to session from command line

```sh
tmux a -t <session_name>
```

2. Detach from session

```
C-a d
```

3. Rename window inside session

```
C-a ,
```

4. Rename session inside session

```
C-a $
```

5. Kill session

```sh
tmux kill-ses -t <session_name>
```

6. Create new window inside session

```
C-a c
```