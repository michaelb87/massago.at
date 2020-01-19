# Massago

> Heilmassage Andrea Orlovits

http://www.massago.at

Go live date is planned for January 19, 2020 

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Deployment

### Initial setup 
`pm2 deploy ecosystem.config.js production setup`

`copy .env and .env.server to /var/www/massago-at/source/`

### deploy

`pm2 deploy ecosystem.config.js production`