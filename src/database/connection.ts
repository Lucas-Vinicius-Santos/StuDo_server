import Knex from 'knex';
import path from 'path';

const db = Knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, 'db.sqlite')
  },
})

export default db;