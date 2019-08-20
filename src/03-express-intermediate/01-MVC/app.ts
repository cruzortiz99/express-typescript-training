import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './router/User/routing'
import homeRouter from './router/Home/routing'
import errorsRouter from './router/Errors/routing'

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRouter)
app.use(homeRouter)
app.use(errorsRouter)

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
