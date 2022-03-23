// Import dependencies
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'

// Import routes
import router from './routes/generic-route'
import chartDataRouter from './routes/chart-data-route'

// Set default port for express app
const PORT = process.env.PORT || 4002

// Create express app
const app = express()

// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/chart-api/v1/charts', router)
app.use('/chart-api/v1/charts-data', chartDataRouter)

app.get('/', (req, res) => {
  res.send('Well done!')
})

// Start express app
export default app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`)
})
