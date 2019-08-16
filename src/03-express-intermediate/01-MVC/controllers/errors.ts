import fs from 'fs'
import { Response, Request } from 'express-serve-static-core'

export const error404Handler = (request: Request, response: Response) => {
  fs.readFile(notFoundViewPath, (err, data) => {
    if (err) {
      response.end()
    }
    response.status(404).send(data)
  })
}
