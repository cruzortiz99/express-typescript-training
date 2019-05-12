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
    let filePath = path.join(__dirname, 'index.html')
    // Iniciando un stream
    let file = fs.createReadStream(filePath, {
      encoding: 'utf8',
      highWaterMark: 64 * 1024
    })
    // Trabajando con los eventos del stream, esto permite realizar bloques de proceso sin bloqueo
    file.on('data', (chunk) => {
      response.write(chunk)
    })
    file.on('close', () => {
      response.end()
    })
  }
})
// Escuchando por el host y el puerto definidos
server.listen(port, host, () => {
  console.log(`Running server at host:${host} , port:${port}`)
})
