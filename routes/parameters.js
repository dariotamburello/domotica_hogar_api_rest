import { Router } from 'express'
import { ParameterController } from '../controllers/parameters.js'

export const parametersRouter = Router()

parametersRouter.get('/', ParameterController.getAll)
parametersRouter.get('/poolserviceconfiguration', ParameterController.getPoolServiceConfiguration)
parametersRouter.get('/:id', ParameterController.getById)
parametersRouter.post('/', ParameterController.create)
parametersRouter.delete('/:id', ParameterController.delete)
parametersRouter.patch('/:id', ParameterController.update)
