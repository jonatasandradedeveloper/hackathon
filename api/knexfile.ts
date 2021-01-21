module.exports = {
  client: 'mysql',
  connection: {
    database: 'loja',
    user: 'root',
    password: 'loja'
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
