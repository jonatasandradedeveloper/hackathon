module.exports = {
  client: 'mysql',
  connection: {
    database: 'loja',
    user: 'develop',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  },
  timezone: 'UTC'
};
