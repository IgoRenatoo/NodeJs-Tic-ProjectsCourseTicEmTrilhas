import { DataTypes, Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/tic.db'
})

// Verifica a conexão do sequelize com o banco de dados.
sequelize.authenticate()
  .then(() => { console.log('Conexão com database estabelecida com sucesso!') })
  .catch((erro) => { console.error('Erro ao conectar ao banco de dados: ', erro) })

// Criação da tabela User definindo os parâmetros e suas respectivas colunas.
export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

// Criação da tabela Produto definindo os parâmetros  e suas respectivas colunas.
export const Product = sequelize.define('product', {
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
