import express from 'express'
import {getReceiptsChartData} from '../controllers/chart-controller'

const chartDataRouter = express.Router()

chartDataRouter.get('/', getReceiptsChartData)

export default chartDataRouter
