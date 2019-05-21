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

router.get('/', (request, response) => {
  fs.readFile(path.join(...adminAssets, 'index.html'), (err, data) => {
    response.end(data)
  })
})

export const adminFilter = '/admin'
export const adminRouter = router
