```ruby
a = [*1..5]
# => [1, 2, 3, 4, 5]
a.inject{|e, sum| sum += e}
# => 15
a.inject{|e, prod| prod *= e}
# => 120
```