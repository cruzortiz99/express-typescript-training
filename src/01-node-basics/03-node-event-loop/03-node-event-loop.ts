import http from 'http'
import fs from 'fs'
import path from 'path'
const port = 3000
const host = 'localhost'
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method
  // Log
  console.log(method, url)
  if (url === '/' && method === 'GET') {
    // Construyendo la ruta al archivo
    let filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'static',
      '01-node-basics',
      '03-node-event-loop',
      'index.html'
    )
    // Iniciando un stream
    let file = fs.createReadStream(filePath, {
      encoding: 'utf8',
      highWaterMark: 64 * 1024
    })
    // Trabajando con los eventos del stream, esto permite realizar bloques de proceso sin bloqueo
    file.on('data', (chunk) => {
      response.write(chunk)
    })
    // Escuchando el evento close para cerrar la respuesta
    file.on('close', () => {
      response.end()
    })
  }
})
// Escuchando por el host y el puerto definidos
server.listen(port, host, () => {
  console.log(`Running server at host:${host} , port:${port}`)
})
