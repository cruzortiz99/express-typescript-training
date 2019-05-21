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

router.get('/', (request, response) => {
  fs.readFile(path.join(...userAssets, 'index.html'), (err, data) => {
    response.end(data)
  })
})

export const userFilter = '/user'
export const userRouter = router
