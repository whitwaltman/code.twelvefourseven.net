+++
title = "Unwrap an optional"
date = 2026-02-20
+++

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