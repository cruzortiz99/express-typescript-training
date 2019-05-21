/**
 * Se creará una aplicación express utilizando
 * los routers de express para dividir el código y
 * hacer la aplicación más sostenible
 */
import express, { response } from 'express'
/**
 * Se importan las rutas correspondientes para la aplicación
 */
import { userFilter, userRouter } from './routes/user/routing'
import { adminFilter, adminRouter } from './routes/admin/routing'
import fs from 'fs'
import path from 'path'

const app = express()
const port = 3000
const host = 'localhost'
/**
 * Se pasan las rutas a través de los middleware.
 * Express se encarga de hacer compatible la aplicación
 */
app.use(userFilter, userRouter)
app.use(adminFilter, adminRouter)

/**
 * Ruta raíz
 */
const root = [
  __dirname,
  '..',
  '..',
  '..',
  'static',
  '02-express-basics',
  '03-routers',
  'index.html'
]

app.get('/', (request, response) => {
  fs.readFile(path.join(...root), (err, data) => {
    response.end(data)
  })
})
/**
 * Rutas no manejadas
 */
app.use((request, response) => {
  response.status(404).end(`
    <h1>Not Found</h1>
  `)
})
app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
