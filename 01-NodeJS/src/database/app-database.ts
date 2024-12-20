import sqlite3 from 'sqlite3'

// Cria a instância do banco de dados.
const db = new sqlite3.Database('./src/database/tic.db', (error) => {
  if (error) {
    console.log(`Error ao inicializar o banco de dados: ${error}`)
  } else {
    console.log('Bando de dados inicializado com sucesso!')
  }
})
