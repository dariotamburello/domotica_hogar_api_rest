import { conn } from '../helpers/mysql.js'

export class ModelPoolServiceConfig {
  static async getConfig () {
    try {
      const [rows] = await conn.query(`
        SELECT
          (SELECT value FROM parameters WHERE name = 'intervalGetTempPileta') AS intervalGetTempPileta,
          (SELECT ip FROM nodes WHERE name = 'espNodoPileta') AS espNodoPileta;
      `)
      if (rows.length > 0) {
        return rows[0]
      } else {
        console.error('Values not found')
        return null
      }
    } catch (error) {
      console.log(error)
    }
  }
}
