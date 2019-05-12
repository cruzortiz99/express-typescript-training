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
