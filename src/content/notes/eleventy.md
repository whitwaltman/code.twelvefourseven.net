---
source: https://davidmatthew.ie/11twyg-eleventy-with-twig-and-yaml/
---

```html
<header>
  <h1>{{ title }}</h1>
  <h2>{{ tagline }}</h2>
</header>
```

```js
twig.extendFunction('getYear', () => {
  let date = new Date();
  return date.getFullYear();
});
```

```html
{% set title = '11twyg' %}
{% set tagline = 'Eleventy with Twig and YAML Support' %}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
</head>
<body>
  {% include 'header.html' with {
    title: site.name,
    tagline: site.tagline
  }}
  <footer>
    Copyright © Whoever {{ getYear() }}
  </footer>
</body>
</html>
```