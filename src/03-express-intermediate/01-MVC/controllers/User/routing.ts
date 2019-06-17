import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { User } from '../../models/User'

const viewsPath = '../../../../../../static/03-express-intermediate/01-MVC/views'.split(
  '/'
)
const formViewPath: string = path.join(__dirname, ...viewsPath, 'form.html')
const router = Router()

router.get('/form', (request, response, next) => {
  fs.readFile(formViewPath, (err, data) => {
    if (err) {
      console.error(err)
      next()
    } else {
      response.status(200).write(data)
    }
  })
})
router.post('/form', (request, response) => {
  const user = new User(request.body.name, request.body.age)
  response.status(200).end(`
    <h3>${user.sayHello()}</h3>
  `)
})

export default router
