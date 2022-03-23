// Import database
import knex from '../db'
import express from 'express'

// Retrieve all items
export const getAll = (req: express.Request, res: express.Response): void => {
  // Get all items from database
  const table = req.baseUrl.replace('/chart-api/v1/', '')
  knex
    .select('*') // select all records
    .from(table) // from corresponding table
    .then(userData => {
      // Send items extracted from database in response
      console.log("Table 'charts' exists")
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.status(500).json({message: err, table})
    })
}

// CRUD
// Create new item
export const create = (req: express.Request, res: express.Response): void => {
  // Add new item to database
  const data = {
    ...req.body
  }
  const table = req.baseUrl.replace('/chart-api/v1/', '')
  knex(table)
    .insert(data)
    .returning('id')
    .then(([id]) => {
      // Send created item in response
      res.status(201).json({
        id: id,
        ...data
      })
    })
    .catch(err => {
      // Send a error message in response
      res.status(500).json({message: err})
    })
}

// Retrieve specific item
export const get = (req: express.Request, res: express.Response): void => {
  // Get specific item from database
  const table = req.baseUrl.replace('/chart-api/v1/', '')
  knex(table)
    .where('id', req.params.id)
    .then(userData => {
      if (!userData) {
        // not found
        res.sendStatus(404)
      }
      // Send item extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.status(500).json({message: err})
    })
}

// Update specific article
export const update = (req: express.Request, res: express.Response): void => {
  // Update specific article in database
  const table = req.baseUrl.replace('/chart-api/v1/', '')
  knex(table)
    .update({
      ...req.body
    })
    .where('id', req.params.id)
    .then(() => {
      // Send a success message in response
      res.sendStatus(204)
    })
    .catch(err => {
      // Send a error message in response
      res.status(500).json({message: err})
    })
}

// Delete specific item
export const deleteItem = (
  req: express.Request,
  res: express.Response
): void => {
  // Find specific item in the database and remove it
  const table = req.baseUrl.replace('/chart-api/v1/', '')
  knex(table)
    .where('id', req.params.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.sendStatus(204)
    })
    .catch(err => {
      // Send a error message in response
      res.status(500).json({message: err})
    })
}
