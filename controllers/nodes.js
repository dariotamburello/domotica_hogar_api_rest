import { NodeModel } from '../models/nodes.js'

export class NodesController {
  static async getAll (req, res) {
    const { enabled } = req.query
    const nodes = await NodeModel.getAll({ enabled })
    res.json(nodes)
  }

  static async getById (req, res) {
    const { id } = req.params
    const node = await NodeModel.getById({ id })
    res.json(node)
  }
}
