---
title: Ruby tricks
type: note
---
Generate an array of the letters from A to Z

```ruby
alpha = ("A".."Z").to_a

alpha_2 = (?A..?Z).to_a

alpha_3 = [*?A..?Z]
```

* * *

Generate an array of numbers from a to b

```ruby
a, b = 3, 12
range = [*a..b]
# => [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

* * *

Get the ASCII value of a character

```ruby
?a.ord
# => 97
?A.ord
# => 65
```

* * *

Get a character from its ASCII value

```ruby
75.chr
# => "K"
```

* * *

Split a string into an array of characters

```ruby
word = "CYAN"
word.chars
# => ["C", "Y", "A", "N"]
```