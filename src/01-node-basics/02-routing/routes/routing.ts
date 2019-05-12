import { IncomingMessage, ServerResponse } from 'http'
// Construyendo la respuesta de la ruta base
const getRoot = (response: ServerResponse) => {
  response.write(`
      <h1>Hola Mundo</h1>
      `)
  response.end()
}
// Encargado de las peticiones GET
const getByUrl = (request: IncomingMessage, response: ServerResponse) => {
  switch (request.url) {
    case '/':
      getRoot(response)
      break
  }
}
// Direccionamiento por el método
const responseByMethod = (
  request: IncomingMessage,
  response: ServerResponse
) => {
  switch (request.method) {
    case 'GET':
      break
  }
}

export default responseByMethod
