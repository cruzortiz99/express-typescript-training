/**
 * Se creará una aplicación simple para despachar
 * un pagina que solicitará una hoja de estilo en
 * la carpeta public/css/
 */
import express from 'express'
import path from 'path'
/**
 * Constante de la app express
 */
const port: string | number | undefined = process.env.PORT || 3000
const app = express()
/**
 * Middleware para el despacho de recursos estáticos,
 * automáticamente responderá cuando no consiga
 * el recurso y mandara a correr el siguiente middleware
 */
app.use(
  express.static(
    path.join(__dirname, '..', '..', 'static', '04-static-resources', 'public')
  )
)
/**
 * Middleware para el despacho del index.html
 */
app.get('/', (request, response) => {
  response.sendFile(
    path.join(
      __dirname,
      '..',
      '..',
      '02-express-basics',
      'static',
      '04-static-resources',
      'index.html'
    )
  )
})
app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
