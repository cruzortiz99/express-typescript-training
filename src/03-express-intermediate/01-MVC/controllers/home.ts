import { Request, Response, NextFunction } from 'express-serve-static-core'
import fs from 'fs'
import path from 'path'

const viewsPath = '../../../../static/03-express-intermediate/01-MVC/views'.split(
  '/'
)
const homeViewPath = path.resolve(__dirname, ...viewsPath, 'home.html')

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
