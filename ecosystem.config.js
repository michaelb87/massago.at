module.exports = {
  apps : [{
    name: 'Massago',
    script: 'server/index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'one',
      host : 'www.massago.at',
      ref  : 'origin/master',
      repo : 'https://github.com/michaelb87/massago.at.git',
      path : '/var/www/massago-at',
      'post-deploy' : 'yarn install && yarn build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
