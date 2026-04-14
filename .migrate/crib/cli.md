---
title: Unix-like CLI quick ref
code: true
---

```sh
# make new file & write to it
echo "hello world" > file.txt
```

```sh
# append string to EOF
echo "hi mom" >> file.txt
```

## navigation

```sh
# go up one directory
cd ..
```

```sh
# navigate to root
cd ~
```

```sh
# go back to prev dir
cd -
```

## idk um file management?

```sh
# copy a boilerplate template file to curr dir
cp ~/skeleton/index.html ./
```

How I like to create symlinks

```sh
cd <target_dir>
x=$(pwd)
cd ~/symlinks
ln -s $x <symlink_name>
```