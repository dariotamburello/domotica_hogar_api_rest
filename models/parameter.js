import { randomUUID } from 'node:crypto'
import { conn } from '../helpers/mysql.js'

export class ParameterModel {
  static async getAll ({ parameter }) {
    try {
      const result = await conn.query('SELECT * FROM parameters ')
      if (parameter) {
        return result[0].find(r => r.name === parameter)
      }
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }

  static async getById ({ id }) {
    try {
      const result = await conn.query('SELECT * FROM parameters WHERE id = ?', id)
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }

  static async create ({ input }) {
    const {
      id = randomUUID(),
      name,
      value,
      description
    } = input
    try {
      await conn.query('INSERT INTO parameters (id, name, value, description) VALUES ?, ?, ?, ?',
        [id, name, value, description])
      return input
    } catch (error) {
      console.log(error)
    }
  }

  static async delete ({ id }) {
    try {
      const parameter = await conn.query('SELECT * FROM parameters WHERE id = ?', id)
      if (parameter.length === 0) return null
      await conn.query('DELETE FROM parameters WHERE id = ?', id)
      return true
    } catch (error) {
      console.log(error)
    }
  }

  static async update ({ id, input }) {
    try {
      const parameter = await conn.query('SELECT * FROM parameters WHERE id = ?', id)
      const newParameter = {
        id,
        name: input.name ?? parameter[0].name,
        value: input.value ?? parameter[0].value,
        description: input.description ?? parameter[0].description
      }
      const result = await conn.query('UPDATE parameters SET name = ?, value = ?, description = ? WHERE id = ?',
        [newParameter.name, newParameter.value, newParameter.description, id])

      if (result[0]) return newParameter
      return false
    } catch (error) {
      console.log(error)
    }
  }
}
