module.exports = {
  apps: [{
    name: 'app',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    wait_ready: true,
    stop_exit_codes: [0],
    listen_timeout: 50000,
    kill_timeout: 5000,
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}