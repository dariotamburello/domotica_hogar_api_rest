import express from 'express'
import { parametersRouter } from './routes/parameters.js'
import { corsMiddleware } from './middlewares/cors.js'
import { NodesRouter } from './routes/nodes.js'

const app = express()
const PORT = process.env.NODE_PORT ?? 3000

app.use(corsMiddleware())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Home Automation API v1. See documentation:')
})

app.use('/parameters', parametersRouter)
app.use('/nodes', NodesRouter)

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})
