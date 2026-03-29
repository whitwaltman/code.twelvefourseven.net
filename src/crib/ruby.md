---
title: Ruby quick ref
code: true
---

```rb
'hello'.gsub(/[eo]/, 'e' => 3, 'o' => '*')
# => "h3ll*"
```

## misc.

- Ruby has no pre/post-increment operator (e.g. `i++`)
    - have to do `i += 1`
- `input.split("\n")` MUST use double quotes for escape sequence delimiter
- `str.chars` is faster and more robust than `str.split('')`


---

[text](../../../../Desktop/_dir/summaries/ruby.md)