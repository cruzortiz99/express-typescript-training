import express from 'express'

const port = 3000
const host = 'localhost'
const app = express()

app.use('/', (request, response, next) => {
  if (request.method === 'GET') {
    response.write(`
    <h1>Hola mundo!</h1>
    `)
  }
  next()
})

app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
