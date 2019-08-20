import fs from 'fs'
import path from 'path'
import { User } from '../entities/User'
import { Request, Response, NextFunction } from 'express-serve-static-core'

const viewsPath = '../../../../static/03-express-intermediate/01-MVC/views'.split(
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
    response.end()
  })
}
export const postUser = (request: Request, response: Response) => {
  const user = new User(request.body.name, request.body.age)
  user.save()
  response.redirect('/user/form')
}

export const getUsers = (request: Request, response: Response) => {
  const users = User.fetchAll()
  const usersHasJson = JSON.stringify(users)
  response.status(200).setHeader('Content-Type', 'application/json')
  response.send(usersHasJson)
}
