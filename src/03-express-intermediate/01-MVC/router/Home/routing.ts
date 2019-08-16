import { Router } from 'express'
import { Request, Response, NextFunction } from 'express-serve-static-core'
const router = Router()

router.get('', (request: Request, response: Response, next: NextFunction) => {
  fs.readFile(homeViewPath, (err, data) => {
    if (err) {
      console.error(err)
      next()
    } else {
      response.status(200).send(data)
    }
  })
})

export default router
