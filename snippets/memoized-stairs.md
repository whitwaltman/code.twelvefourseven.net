---
title: A memoized climbing stairs solution
tags:
- ruby
- dynamic-programming
- memoization
---

```ruby
def climb_stairs(n)
    stairs_util(n, {})
end

def stairs_util(n, memo)
    return 1 if n == 0
    return 1 if n == 1
    memo[n] ||= stairs_util(n - 1, memo) + stairs_util(n - 2, memo)
end
```