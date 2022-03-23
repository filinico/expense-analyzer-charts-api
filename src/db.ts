// Import path module
import path from 'path'
import Knex from 'knex'
import sqlite3 from 'sqlite3'

// Get the location of sqlite file
const dbPath = path.resolve(__dirname, 'expense-analyzer-charts.db')
const connectionConfig = {
  filename: dbPath,
  mode: sqlite3.OPEN_CREATE
}
const inMemoryConnection = ':memory:'

// Create connection to SQLite database
const knex = Knex({
  client: 'sqlite3',
  connection:
    process.env.NODE_ENV === 'test' ? inMemoryConnection : connectionConfig,
  useNullAsDefault: true
})

knex.schema.hasTable('charts').then(function (exists) {
  if (!exists) {
    return knex.schema
      .createTable('charts', function (table) {
        table.increments()
        table.string('name')
      })
      .then(() => {
        // Log success message
        console.log("Table 'charts' created")
      })
  }
})

// Export the database
export default knex
