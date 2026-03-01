---
title: Unix-like CLI
tags:
  - quick-ref
created: 2026-03-01T22:14:14.888Z
---

1. Make a new file, write to it

```sh
echo "hello world" > file.txt
```

2. Append string to end of file

```sh
echo "hi mom" >> file.txt
```

3. Change all lowercase chars to uppercase

```sh
tr '[:lower:]' '[:upper:]' < lower.txt > upper.txt
```
