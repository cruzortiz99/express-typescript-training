import fs from 'fs'
import path from 'path'
import { Response, Request } from 'express-serve-static-core'
const viewsPath = '../../../../static/03-express-intermediate/01-MVC/views'.split(
  '/'
)
const notFoundViewPath = path.resolve(__dirname, ...viewsPath, '404.html')

export const error404Handler = (request: Request, response: Response) => {
  fs.readFile(notFoundViewPath, (err, data) => {
    if (err) {
      response.end()
    }
    response.status(404).send(data)
  })
}
