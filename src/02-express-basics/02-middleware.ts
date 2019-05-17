import express from 'express'
import path from 'path'
import fs from 'fs'

const port = 3000
const host = 'localhost'
const app = express()

// Middleware para los archivos estáticos
app.use('/assets', (request, response) => {
  let fileName = path.basename(request.url)
  fs.readFile(
    path.join(
      __dirname,
      '..',
      '..',
      'static',
      '02-express-basics',
      '02-middleware',
      'assets',
      fileName
    ),
    (err, data) => {
      if (err) {
        response.redirect('/assets/404.html')
      }
      response.end(data)
    }
  )
})
// Middleware raíz
app.use('/', (request, response) => {
  fs.readFile(
    path.join(
      __dirname,
      '..',
      '..',
      'static',
      '02-express-basics',
      '02-middleware',
      'index.html'
    ),
    (err, data) => {
      if (err) {
      }
    }
  )
})
// Middleware get para la segunda pagina
// Middleware post para redirections

app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
