import { conn } from '../helpers/mysql.js'

export class NodeModel {
  static async getAll ({ enabled }) {
    try {
      const [nodes] = await conn.query('SELECT * FROM nodes')
      if (enabled && nodes.length > 0) return nodes.filter(n => n.enabled === +enabled)
      return nodes
    } catch (error) {
      console.log(error)
    }
  }

  static async getById ({ id }) {
    try {
      const [nodes] = await conn.query('SELECT * FROM nodes WHERE id = ?', id)
      return nodes
    } catch (error) {
      console.log(error)
    }
  }
}
