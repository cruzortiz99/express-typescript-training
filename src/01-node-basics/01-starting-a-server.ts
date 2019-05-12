import http from 'http'
// Constantes para la creación del servidor
const port = 3000
const host = 'localhost'
// Iniciando el servidor
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method
  // Log
  console.log(method, url)
  if (url === '/' && method === 'GET') {
    response.write(`
      <h1>Hola Mundo</h1>
    `)
    response.end()
  }
})
// Escuchando por el host y el puerto definidos
server.listen(port, host, () => {
  console.log(`Running server at host:${host} , port:${port}`)
})
