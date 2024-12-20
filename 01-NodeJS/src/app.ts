import http from 'http'
import fs from 'fs'
import { sequelize } from './models/app-models'
import { rotas } from './routers/app-router'

// Função para criar o arquivo
fs.writeFile('./mensagem.txt', 'Olá, TIC em Trilhas do arquivo!', 'utf8', (erro) => {
  if (erro) {
    console.error('Falha ao escrever no arquivo:', erro)
  } else {
    console.log('Arquivo criado com sucesso!')
  }
})

// Ler o arquivo após criá-lo
fs.readFile('./mensagem.txt', 'utf8', (erro, conteudo) => {
  if (erro) {
    console.error('Falha na leitura do arquivo:', erro)
  } else {
    console.log('Conteúdo do arquivo:', conteudo)
  }

  // Iniciar o servidor HTTP usando o conteúdo lido
  iniciaServidorHttp(conteudo)
})

function iniciaServidorHttp (conteudo) {
  const porta = 3000
  const host = 'localhost'

  sequelize.sync()

  const servidor = http.createServer((req, res) => {
    rotas(req, res, conteudo)
  })

  servidor.listen(porta, host, () => {
    console.log(`Servidor executando em http://${host}:${porta}/`)
  })
}
