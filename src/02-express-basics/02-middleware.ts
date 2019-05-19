import express from 'express'
import path from 'path'
import fs from 'fs'
import bodyParser from 'body-parser'

// Constantes de la app
const port = 3000
const host = 'localhost'
const app = express()

// Body Parser para todas las peticiones
app.use(bodyParser.urlencoded({ extended: false }))

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
        response.writeHead(404)
        response.end()
      } else {
        response.end(data)
      }
    }
  )
})

// Middleware get para la segunda pagina con formulario
app.get('/form', (request, response) => {
  fs.readFile(
    path.join(
      __dirname,
      '..',
      '..',
      'static',
      '02-express-basics',
      '02-middleware',
      'assets',
      'form.html'
    ),
    (err, data) => {
      if (err) {
        response.redirect('/assets/404.html')
        response.end()
      } else {
        response.end(data)
      }
    }
  )
})

// Middleware para post
app.post('/form', (request, response) => {
  let html = `
  <body>
    <h1> Hola, ${request.body.user}</h1>
  </body>
  `
  response.end(html)
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
        response.redirect('/assets/404.html')
        response.end()
      } else {
        response.end(data)
      }
    }
  )
})
app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
