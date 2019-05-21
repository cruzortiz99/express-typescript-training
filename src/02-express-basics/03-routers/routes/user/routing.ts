/**
 * Se llama a Router de express que se comporta similar
 * a una aplicación express
 */
import { Router } from 'express'
import path from 'path'
import fs from 'fs'

const router = Router()
const userAssets = [
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  'static',
  '02-express-basics',
  '03-routers',
  'assets',
  'user'
]
/**
 * se crean las rutas tal cual una aplicación express
 */
router.get('/', (request, response) => {
  fs.readFile(path.join(...userAssets, 'index.html'), (err, data) => {
    response.end(data)
  })
})
/**
 * Se exporta el router definido y si aplica su filtro
 */
export const userFilter = '/user'
export const userRouter = router
