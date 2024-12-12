import mysql from 'mysql2/promise'

import { DBNAME, DBPASS, DBPORT, DBSERVER, DBUSER } from '../config.js'

export const conn = await mysql.createConnection({
  host: DBSERVER,
  port: DBPORT,
  user: DBUSER,
  password: DBPASS,
  database: DBNAME
})
