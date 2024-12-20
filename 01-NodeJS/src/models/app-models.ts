import { DataTypes, Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/tic.db'
})

// Verifica a conexão do sequelize com o banco de dados.
sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso!')
  })
  .catch((erro) => {
    console.error('Erro ao conectar ao banco de dados:', erro)
  })

// Criação da class Produto definindo os parâmetros da tabela 'produto' e suas respectivas colunas.
export const Produto = sequelize.define('produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
})
