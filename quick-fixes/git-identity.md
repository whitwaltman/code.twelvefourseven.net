---
title: Correct access rights to push to git remote
tags:
- git
- github
- ssh
---

I use two different GitHub accounts, and occasionally, I get my wires crossed. Whenever I get the following error message, the fix is almost always `ssh-add ~/.ssh/whitwaltman`.

```
ERROR: Repository not found.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```