I have two different GitHub accounts, and I have repositories on my local machine that push to remotes on each account.

Sometimes I get the following error when I try to make pushes to my remote:

```
ERROR: Repository not found.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

But when I run `git rv` (my alias for `git remote -v`), I can clearly see that the remote exists and is correct. This usually means that I'm trying to push to remote with the wrong ssh credentials.

Now, I don't fully understand all the exact details, but I have enough of a general idea. If I use any technical terminology incorrectly, I apologize. Feel free to flag any errors or mistakes you notice and send them to `whitwaltman[at]mailbox[dot]org`.

In `~/.ssh`, I named my files with the corresponding github username. So, whenever this happens, I just run `ssh-add ~/.ssh/[some_username]` and then try pushing to remote again. It's worked every time so far. If it ever doesn't fix the problem, I'll come back and amend this post.