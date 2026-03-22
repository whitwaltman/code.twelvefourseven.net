---
title: Negative indexing
tags:
  - ruby
  - javascript
  - arrays
created: 2026-03-01T22:37:43.728Z
---

Some languages allow you to use a negative index value (e.g. Ruby, JavaScript). A negative index is an offset that traverses backwards from the end of the array.

```ruby
arr = (?A..?E).to_a     # => ["A", "B", "C", "D", "E"]
arr[-1] == ?E           # => true
```

A negative index is within range if its absolute value is not larger than the size of the array.

```ruby
arr.size == 5           # => true
arr[-5] == arr[0]       # => true
```
