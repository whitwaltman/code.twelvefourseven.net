---
title: Aggregation vs. composition
tags: ["note", "software-design", "domain-modeling"]
---

- Who controls the lifecycle and identity of the parts? Does deletion cascade in the system? {% note %}if yes, this is composition{% endnote %}
- Composition = **strong** ownership (parts are bound to the whole's lifecycle)
- Aggregation = *weak* ownership (parts can exist independently)