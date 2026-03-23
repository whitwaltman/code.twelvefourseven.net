---
title: Swift crib sheet
---

Doubles vs. floats
```swift
let untyped = 3.14159265
print(type(of: untyped))                // Double

let lessPrecise: Float = Float(untyped)
print(lessPrecise)                      // 3.1415927
print(untyped == Double(lessPrecise))   // false
```

Strings
```swift
let item: String = "Oranges"
print(item.count)                       // 7
print(item.lowercased())                // "oranges"
print(item.uppercased())                // "ORANGES"
```