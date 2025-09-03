---
title: "Sum the values in an array"
tags: [ruby, arrays, enumerables]
---
## Simple, idiomatic solution: `sum`

```ruby
nums = (1..5).to_a
# => [1, 2, 3, 4, 5]
nums.sum
# => 15
```

## A more manual, generalized approach: `reduce`

```ruby
arr = [*1..9].select(&:even?)
# => [2, 4, 6, 8]
arr.reduce(:+)  # or arr.reduce(0, :+) with 0 as initial value
# => 20
```

Note that `reduce` is an alias for `inject`. [Stylistically](https://rubystyle.guide/#map-find-select-reduce-include-size), `reduce` is preferred over `inject` unless the latter enhances readability.