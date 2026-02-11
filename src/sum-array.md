---
title: Sum an array of integers
type: note
---

> Given an array of unknown length containing integers, write a function that returns the sum of the array's contents.

The most basic approach would be the imperative solution, which entails declaring a variable and initializing it to 0, looping through the array, and adding each element of the array to the variable, which is returned at the end of the loop.

A more concise and robust approach is to functionally reduce or flatten the array into a single value, the sum of the numbers. What follows is the functional solution in a few different languages. I may add other language solutions in the future, but these are ones I can easily produce off the top of my head without looking up syntax and methods. I haven't done as much functional-style programming in, say, Java or Python, so I'm skipping those for now.

## JavaScript

While perhaps not the most readable code for someone unfamiliar with JS, I like the concision and simplicity of this solution, which is aided by the use of anonymous functions and implicit returns in functions without a block body. Here, we pass 2 items to `reduce`, a reducer function and an initial value (technically optional, but good practice to provide). The reducer function has two arguments, the accumulator value and the current element's value. We simply return the sum of the two values at each step in the loop.

While the initial value isn't required to use `reduce`, I like to provide it for two reasons.

1. Using a consistent syntactical approach helps me remember and apply the proper structure when optional elements become necessary. For instance, if I was reducing an array into an object, I would have to pass `{}` as my initial value because I'm transforming the shape of the array. This is the same reason why I use parentheses around single arguments in callback functions.
2. If my summing function is used on an empty array, I'm going to get a `TypeError`. You can't perform a reduce on an empty array that has no initial value. When reduce isn't given an initial value, it defaults to using the first element of the array and begins performing the loop on the second index. It can't do that if the array is empty.

```js
const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
```

## Ruby

This Ruby solution utilizes the language's implicit return feature, as well as the built-in shortcut for passing a symbol to the `Enumerable#reduce` method. The symbol is used as the name of the method to call on the accumulator for each element in the collection, thus summing the contents of the array.

```rb
def sum(arr)
    arr.inject(:+)
end
```

## Swift

Both these approaches do the same thing, but the second one explicates the fact that we're adding the current element (`$1`) to our partial sum (`$0`) at each step in the loop.

```swift
func sum(arr: Int[]) -> Int {
    return arr.reduce(0, +)
}
```

```swift
func sum(arr: Int[]) -> Int {
    return arr.reduce(0) { $0 + $1 }
}
```