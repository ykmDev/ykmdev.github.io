# Personal Portfolio

* Inspired by https://vivek9patel.github.io

## Nginx configuration

```nginx
server {
    client_max_body_size 64M;
    listen 80;
    server_name yankyawmin.tech www.yankyawmin.tech;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_read_timeout 60;
        proxy_connect_timeout 60;
        proxy_redirect off;

        # Allow the use of websockets
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /_next/static/ {
        alias /var/www/yankyawmin.tech/ubuntu-portfolio/out/_next/static/;
        expires 1y;
        access_log off;
    }

    location /static/ {
        alias /var/www/yankyawmin.tech/ubuntu-portfolio/out/static/;
        expires 1y;
        access_log off;
    }

}
```

deploy ref:
1) https://medium.com/@gaurav011/how-to-deploy-your-next-js-app-on-linux-with-nginx-0bc2a7508406
2) https://www.dhiwise.com/post/how-to-host-your-nextjs-nginx-application-efficiently

## Configure a Process Manager with PM2
``` pm2 start npm --name "ubuntu-portfolio" -- start ```

## Setting up SSL
```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d www.yankyawmin.tech
sudo certbot --nginx -d yankyawmin.tech
```
