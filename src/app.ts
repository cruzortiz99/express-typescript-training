import express from 'express'
import fs from 'fs'
import path from 'path'

const port = parseInt(`${process.env.PORT || 3000}`)
const host = 'localhost'
const app = express()

app.use((request, response, next) => {
  console.log(request.method, request.url)
  next()
})

app.use('/stylesheet.css', (request, response, next) => {
  let css = fs
    .createReadStream(
      path.join(__dirname, '..', 'node_modules', 'bulma', 'css', 'bulma.css'),
      { encoding: 'utf8' }
    )
    .pipe(response)
})

app.get('/', (request, response) => {
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
