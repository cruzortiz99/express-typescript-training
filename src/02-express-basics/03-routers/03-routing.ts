/**
 * Se creará una aplicación express utilizando
 * los routers de express para dividir el código y
 * hacer la aplicación más sostenible
 */
import express from 'express'

const app = express()
const port = 3000
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
