import server from '../src/server'
import knex from '../src/db'
import supertest from 'supertest'

const request = supertest(server)

describe('GET / - a simple api endpoint', () => {
  it('API Request', async () => {
    const result = await request.get('/')
    expect(result.text).toEqual('Well done!')
    expect(result.statusCode).toEqual(200)
  })

  it('Charts API Request', async () => {
    const result = await request.get('/chart-api/v1/charts')
    expect(result.statusCode).toEqual(200)
  })
})

afterAll(async () => {
  server.close()
  await knex.destroy()
})
