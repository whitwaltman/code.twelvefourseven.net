---
tags:
- awk
- openbsd
- shell
---
I don't use any JavaScript analytics or cookies or anything on this site. But, because it's a static site that I self host, I have server logs.

Usually, I don't pay much attention to my logs because they're pretty quiet and uninteresting. Sometimes, though, I like to use some piped shell commands to extract more detail from the thousands of lines of text.

Like everything on this site, these commands are pretty specific to me. If you happen to also use OpenBSD and `httpd` to serve a static site, then this should probably work for you too.

```sh
awk '{ print $2 }' redirect.log | sort | uniq -c | sort -r | head -n 15
```
