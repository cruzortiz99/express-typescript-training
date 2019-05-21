/**
 * Se llama a Router de express que se comporta similar
 * a una aplicación express
 */
import { Router } from 'express'
import path from 'path'
import fs from 'fs'

const router = Router()
const adminAssets = [
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
  'admin'
]
/**
 * se crean las rutas tal cual una aplicación express
 */
router.get('/', (request, response) => {
  fs.readFile(path.join(...adminAssets, 'index.html'), (err, data) => {
    response.end(data)
  })
})
/**
 * Se exporta el router definido y si aplica su filtro
 */
export const adminFilter = '/admin'
export const adminRouter = router
