import express from 'express'
import fs from 'fs'
import path from 'path'

const port = 3000
const host = 'localhost'
const app = express()

app.get('/', (request, response) => {
  '../static/index.html'
  let file = fs.createReadStream(
    path.join(__dirname, '..', 'static', 'index.html'),
    {
      encoding: 'utf8'
    }
  )
  file.on('data', (chunk) => {
    response.write(chunk)
  })
  file.on('close', () => {
    response.end()
  })
})

app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
