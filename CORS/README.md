```bash
curl -x "OPTIONS" -i -k http://10.10.10.10/all
```
- -x to send options request
- -i to inclode headers
- -k to allow inscure connectin when using ssl
- url

```bash
curl -x "OPTIONS" -i -H "Origin: http://example.com" -k http://10.10.10.10/all
```
- -H to add origin hadder
