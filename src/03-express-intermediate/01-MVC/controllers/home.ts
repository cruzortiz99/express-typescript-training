import { Request, Response, NextFunction } from 'express-serve-static-core'
import fs from 'fs'

export const home = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  fs.readFile(homeViewPath, (err, data) => {
    if (err) {
      console.error(err)
      next()
    } else {
      response.status(200).send(data)
    }
  })
}
