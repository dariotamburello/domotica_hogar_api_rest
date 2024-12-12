import { Router } from 'express'
import { NodesController } from '../controllers/nodes.js'

export const NodesRouter = Router()

NodesRouter.get('/', NodesController.getAll)
NodesRouter.get('/:id', NodesController.getById)
