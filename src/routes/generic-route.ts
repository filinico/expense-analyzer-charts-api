// Import express
import express from 'express'

// Import generic-controller
import {
  get,
  getAll,
  update,
  create,
  deleteItem
} from '../controllers/generic-controller'

// Create router
const router = express.Router()

// Add route for GET request to retrieve all articles
// In server.ts, articles route is specified as '/articles'
// this means that '/' translates to '/articles'
router.get('/', getAll)

// Add route for POST request to create new article
// In server.ts, articles route is specified as '/articles'
// this means that '/' translates to '/books'
router.post('/', create)

// Add route for GET request to retrieve all articles
// In server.ts, articles route is specified as '/articles'
// this means that '/:id' translates to '/articles/:id'
// where :id is a path param
router.get('/:id', get)

// Add route for PUT request to retrieve all articles
// In server.ts, articles route is specified as '/articles'
// this means that '/:id' translates to '/articles/:id'
// where :id is a path param
router.put('/:id', update)

// Add route for PUT request to delete specific article
// In server.ts, articles route is specified as '/articles'
// this means that '/:id' translates to '/articles/:id'
// where :id is a path param
router.delete('/:id', deleteItem)

// Export router
export default router
