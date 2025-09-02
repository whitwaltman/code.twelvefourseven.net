---
title: "Initialize an array of consecutive values"
tags: [ruby, arrays, ranges]
date: 2025-09-02
draft: true
---

## Splat operator

### Integers

```ruby
range = [*1..9]
# => [1, 2, 3, 4, 5, 6, 7, 8, 9]
range.length
# => 9
range.select(&:even?)
# => [2, 4, 6, 8]
```

If using `..` (inclusive range), the length of an array, `[*a..b]` is equal to `b - a + 1`. 

```ruby
a = -3
# => -3
b = a.abs
# => 3
[*a..b]
# => [-3, -2, -1, 0, 1, 2, 3]
[*a..b].length == (b - a) + 1
# => true
```

Exclusive range (`...`) goes from `a` to `b - 1`, so length = `(b - 1) - a + 1` = `b - a`.

### Strings

```ruby
chars = [*?a..?e]
# => ["a", "b", "c", "d", "e"]
chars.map(&:upcase)
# => ["A", "B", "C", "D", "E"]
```

## Range to array

### Integers

```ruby
range = (0..5).to_a
# => [0, 1, 2, 3, 4, 5]
range == [*0..5]
# => true
```

### Strings

```ruby
range = ?A...?Z
# => "A"..."Z"
range.include? ?Z
# => false
chars = (?W..?Z).to_a
# => ["W", "X", "Y", "Z"]
```