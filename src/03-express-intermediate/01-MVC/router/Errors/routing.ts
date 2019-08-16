import { Router } from 'express'
import fs from 'fs'

const router = Router()

router.get('', (request, response) => {
  fs.readFile(notFoundViewPath, (err, data) => {
    if (err) {
      response.end()
    }
    response.status(404).send(data)
  })
})

export default router
