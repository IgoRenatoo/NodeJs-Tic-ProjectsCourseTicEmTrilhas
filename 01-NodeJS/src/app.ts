import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { passport } from './config/passport-config'
import { swaggerOptions } from './swagger'
import { sequelize } from './models/db-models'
import { routes } from './routes/app-route'

import 'dotenv/config'
sequelize.sync()

const app = express()
const swaggerDocs = swaggerJsdoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(cors({ origin: 'http://localhost:3000/' }))
app.use(express.json())
app.use(routes)
app.use(passport.initialize())

app.listen(process.env.PORT, () => {
  console.log(`Servidor executando em http://localhost:${process.env.PORT}/`)
})
