/**
 * Se crearán rutas de direccionamiento de
 * una aplicación node, para las diferentes
 * peticiones que se le pueden hacer a la aplicación
 */
import http from 'http'
// Importando router
import routing from './routes/routing'
const port = 3000
const host = 'localhost'
const server = http.createServer((request, response) => {
  // Usando el router
  routing(request, response)
  // Log
  const url = request.url
  const method = request.method
  console.log(method, url)
})
server.listen(port, host, () => {
  console.log(`Running server at host:${host} , port:${port}`)
})
