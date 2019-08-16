import fs from 'fs'
import path from 'path'
import { User } from '../models/User'
import { Request, Response, NextFunction } from 'express-serve-static-core'

const viewsPath = '../../../../../../static/03-express-intermediate/01-MVC/views'.split(
  '/'
)
const formViewPath: string = path.join(__dirname, ...viewsPath, 'form.html')
export const getUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  fs.readFile(formViewPath, (err, data) => {
    if (err) {
      console.error(err)
      next()
    } else {
      response.status(200).write(data)
    }
  })
}
export const postUser = (request: Request, response: Response) => {
  const user = new User(request.body.name, request.body.age)
  response.status(200).end(`
    <h3>${user.sayHello()}</h3>
  `)
}
