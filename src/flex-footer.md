---
title: Place footer at bottom of page
tags:
- layout
- css
- flexbox
---
{% set scoped %}
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
    background: red;
}
{% endset %}

{% preview scoped %}
<div class="container">
    <div class="content"></div>
    <footer>This is the footer</footer>
</div>
{% endpreview %}