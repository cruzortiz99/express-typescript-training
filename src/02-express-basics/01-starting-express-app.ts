/**
 * Se iniciará una aplicación express simple
 * que retorne un Hola Mundo en html
 */
import express from 'express'
// Constantes para la aplicación
const port = 3000
const host = 'localhost'
// Construye una aplicación express
const app = express()
// Construye un Middleware para la raíz
app.use('/', (request, response, next) => {
  console.log(request.method, request.url)
  if (request.method === 'GET') {
    // Usar send para escribir la respuesta y cerrar el Middleware
    // next() da paso al siguiente Middleware pero no lo cierra
    // response.end() también lo cierra pero send() es más directo
    response.send(`
    <h1>Hola mundo!</h1>
    `)
  }
})
// Inicia una aplicación express directamente en un servidor http.
// También se puede ejecutar con node, pasando la app de express al servidor
app.listen(port, host, () => {
  console.log(`Running on ${host}:${port}`)
})
