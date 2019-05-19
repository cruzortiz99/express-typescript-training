import express, { response } from 'express'
import path from 'path'
import fs from 'fs'
import bodyParser from 'body-parser'
import { request } from 'https'

// Constantes de la app
const port = 3000
const host = 'localhost'
const app = express()
const assets = [
  __dirname,
  '..',
  '..',
  'static',
  '02-express-basics',
  '02-middleware',
  'assets'
]

// Body Parser para todas las peticiones
app.use(bodyParser.urlencoded({ extended: false }))

// Middleware para los archivos estáticos
app.use('/assets', (request, response) => {
  let fileName = path.basename(request.url)
  fs.readFile(path.join(...assets, fileName), (err, data) => {
    if (err) {
      response.writeHead(404)
      response.end()
    } else {
      response.end(data)
    }
  })
})

// Middleware get para la segunda pagina con formulario
app.get('/form', (request, response) => {
  fs.readFile(path.join(...assets, 'form.html'), (err, data) => {
    response.end(data)
  })
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
app.get('/', (request, response) => {
  fs.readFile(path.join(...assets, '..', 'index.html'), (err, data) => {
    response.end(data)
  })
})
// Manejando paginas inexistentes 404
app.use((request, response) => {
  fs.readFile(path.join(...assets, '404.html'), (err, data) => {
    response.status(404)
    response.end(data)
  })
})

app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
