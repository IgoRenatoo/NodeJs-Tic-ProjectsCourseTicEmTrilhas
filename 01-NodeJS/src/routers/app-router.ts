import { IncomingMessage, ServerResponse } from 'http'

// Função para gerenciar as rotas
export function rotas (req: IncomingMessage, res: ServerResponse, conteudo: string) {
  const url = req.url
  const metodo = req.method

  if (url === '/' && metodo === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Bem-vindo ao servidor TIC em Trilhas!' }))
  }
  else if (url === '/conteudo' && metodo === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ conteudo: conteudo }))
  }
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Página não encontrada!' }))
  }
}
