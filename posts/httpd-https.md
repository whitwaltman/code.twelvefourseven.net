---
tags:
- openbsd
- httpd
- certbot
---
If you have your DNS stuff configured and your name servers pointing to the correct location, you can start serving web content and obtain an SSL certificate in 8 easy steps. (Okay, technically 9 if you don't have )

1. Open `/etc/httpd.conf` with your editor of choice (mine is neovim)
2. Add a server block for your domain:
```conf
server "new.twelvefourseven.net" {
    listen on $ext_ip port 80
    root "/new.twelvefourseven.net"
    location "/.well-known/acme-challenge/*" {
        root "/new.twelvefourseven.net"
    }
}
```
3. Reload `httpd`
4. `certbot certonly --webroot -w /var/www/new.twelvefourseven.net -d new.twelvefourseven.net`
5. Open `/etc/httpd.conf` again
6. Edit the server block for HTTP traffic (this code redirects all HTTP traffic to HTTPS, but you might want to [consider disabling HTTPS auto-redirects](https://1mb.club/blog/https-redirects/))
```conf
server "new.twelvefourseven.net" {
    listen on $ext_ip port 80
    block return 301 "https://$HTTP_HOST$REQUEST_URI"
    log access "/new.twelvefourseven.net/redirect.log"
}
```
7. Add a server block for HTTPS traffic:
```conf
server "new.twelvefourseven.net" {
    listen on $ext_ip port 443
    root "/new.twelvefourseven.net"
    location "/robots.txt" {
        root "/"
    }
    tls {
        certificate "/etc/letsencrypt/live/new.twelvefourseven.net/fullchain.pem"
        key "/etc/letsencrypt/live/new.twelvefourseven.net/privkey.pem"
    }
    log {
        access "/new.twelvefourseven.net/access.log"
        error "/new.twelvefourseven.net/error.log"
    }
}
```
8. Restart `httpd`