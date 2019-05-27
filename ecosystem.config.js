module.exports = {
  apps : [{
    name: 'weiapi-nest',
    script: 'npm',
    args: 'start',
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
      key: '/c/Users/pc/.ssh/id_rsa',
      user : 'root',
      host : ['94.191.104.238'],
      ref  : 'origin/master',
      repo : 'git@github.com:weiavia/weiapi-nest.git',
      path : '/root/weiapi-nest',
      'post-deploy' : 'git pull && pm2 reload ecosystem.config.js --env production'
    }
  }
};