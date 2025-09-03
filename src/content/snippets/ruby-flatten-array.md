---
title: "Flatten a nested array"
tags: [ruby, functional, arrays]
---
`flatten` returns a new array that is a 1D flattening of `self` (recursively). To mutate the original array, use `flatten!`.

```ruby
[1, [2, 3], [4, [5]]].flatten
# => [1, 2, 3, 4, 5]
```

`flatten` has as an optional argument, `level`, which specifies the level of recursion to flatten by.

```ruby
a = [1, 2, [3, [4, 5]]]
a.flatten(1)
# => [1, 2, 3, [4, 5]]
```