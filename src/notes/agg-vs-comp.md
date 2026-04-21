---
title: Aggregation vs. composition
tags: [note, software-design, domain-modeling]
---

## {{ title }}

- Composition = **strong** ownership {% note %}parts are bound to the whole's lifecycle{% endnote %}
- Aggregation = *weak* ownership {% note %}parts can exist independently{% endnote %}

<p>Who controls the lifecycle and identity of the parts? Does deletion cascade in the system? {% note %}if yes, this is composition{% endnote %}</p>