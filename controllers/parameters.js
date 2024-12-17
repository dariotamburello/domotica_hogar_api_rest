import { ParameterModel } from '../models/parameter.js'
import { ModelPoolServiceConfig } from '../models/poolServiceConfiguration.js'

export class ParameterController {
  static async getAll (req, res) {
    const { parameter } = req.query
    const parameters = await ParameterModel.getAll({ parameter })
    res.json(parameters)
  }

  static async getById (req, res) {
    const { id } = req.params
    const parameter = await ParameterModel.getById({ id })
    res.json(parameter)
  }

  static async create (req, res) {
    const input = req.body
    const parameter = await ParameterModel.create({ input })
    res.json(parameter)
  }

  static async delete (req, res) {
    const { id } = req.params
    const resultDelete = await ParameterModel.delete({ id })
    if (resultDelete) return res.json({ message: 'Deleted' })
    return res.status(404).json({ message: 'Not found' })
  }

  static async update (req, res) {
    const { id } = req.params
    const input = req.body
    const resultUpdate = await ParameterModel.update({ id, input })
    if (resultUpdate) return res.json(resultUpdate)
    return res.status(404).json({ message: 'Not found' })
  }

  static async getPoolServiceConfiguration (rea, res) {
    const configuration = await ModelPoolServiceConfig.getConfig()
    res.json(configuration)
  }
}
