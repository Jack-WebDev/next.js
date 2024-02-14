
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
    },
    migrations: {
      tableName: 'knex_user_migrations'
    }
  },
};
