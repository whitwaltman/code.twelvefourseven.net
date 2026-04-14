---
title: cURL quick ref
code: true
---

cURL uses `stdout`

```bash
URL=https://code.twelvefourseven.net
curl $URL > out.txt
```

- Silence output: `-s`
- Use with insecure connection: `-k`

```bash
curl -k http://no-ssl-cert.com
```