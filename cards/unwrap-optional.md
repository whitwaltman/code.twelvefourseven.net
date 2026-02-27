---
title: Unwrap an optional
starred: true
tags:
  - swift
  - how-to
created: '2026-02-21T04:00:27.449Z'
---

There are a couple different ways to unwrap an optional in Swift. This is one of them.

```swift
var favoriteMovie: String? = nil
favoriteMovie = "Fantastic Mr. Fox"

if let movie = favoriteMovie {
    print("Your favorite movie is \(movie)")
} else {
    print("You don't have a favorite movie")
}
```
