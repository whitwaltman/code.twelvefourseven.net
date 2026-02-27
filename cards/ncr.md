---
title: Named/Numeric character references
subtitle: Displaying Unicode characters with relative ease
created: '2026-02-26T03:40:48.367Z'
---

[Here's](https://html.spec.whatwg.org/multipage/named-characters.html) a list of all the supported named character references in HTML. Be warned: it's a lot of math symbols.

Because [this website is written for me](/about), I'm only gonna catalog the ones I use most often.

To have it render properly, just put a &amp; in front of the name in your markup.

|glyph|name|code point|
|---|---|---|
|&gt;|gt;|U+0003E|
|&lt;|lt;|U+0003C|
|&|amp;|U+00026|
|&crarr;|crarr;|U+021B5|
|&EmptySmallSquare;|EmptySmallSquare;|U+025FB|
|&square;|square;|U+025A1|
|&squf;|squf;|U+025AA|
|&marker;|marker;|U+025AE|
|&lowast;|lowast;|U+02217|
|&midast;|midast;|U+0002A|
|&sext;|sext;|U+02736|
|&middot;|middot;|U+000B7|
|&sect;|sect;|U+000A7|
|&mdash;|mdash;|U+02014|
|&para;|para;|U+000B6|

If you want to use them in your CSS, [this](https://www.bennadel.com/blog/4207-using-unicode-and-special-characters-within-the-content-property-in-css.htm) is a useful guide.
