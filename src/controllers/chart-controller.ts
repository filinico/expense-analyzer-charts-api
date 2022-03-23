import express from 'express'
import {getReceiptsChart} from '../services/chart-service'

export const getReceiptsChartData = (
  req: express.Request,
  res: express.Response
): void => {
  getReceiptsChart()
    .then(data => {
      // Send items extracted from database in response
      console.log('Request backend api successful')
      res.json(data)
    })
    .catch(err => {
      // Send a error message in response
      console.log('Request backend api failed')
      res.status(500).json({message: err})
    })
}
