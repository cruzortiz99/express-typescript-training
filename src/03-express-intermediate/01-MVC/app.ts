import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/User/routing'
import fs from 'fs'
import path from 'path'

const PORT = process.env.PORT || 3000
const app = express()
const viewsPath = '../../../../static/03-express-intermediate/01-MVC/views'.split(
  '/'
)
const homeViewPath = path.join(__dirname, 'views', ...viewsPath, 'home.html')
const notFoundViewPath = path.join(__dirname, ...viewsPath, '404.html')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(userController)
app.get('/', (request, response, next) => {
  fs.readFile(homeViewPath, (err, data) => {
    if (err) {
      console.error(err)
      next()
    } else {
      response.status(200).send(data)
    }
  })
})
app.use(express.static(path.join(__dirname, 'public')))
app.use((request, response) => {
  fs.readFile(notFoundViewPath, (err, data) => {
    if (err) {
      response.end()
    }
    response.status(404).send(data)
  })
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
