---
title: grep quick ref
code: true
---

Get line count of readme.md

```sh
grep -c $ readme.md
```

```sh
grep -E <regex_pattern> myFile.md
```

Get number of lines that match the regex pattern

```sh
grep -c -E <regex_pattern> myFile.md
```

Search for a word recursively inside a directory

```sh
grep -nr "word" <directory>
```