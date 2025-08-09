const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Obra = sequelize.define('Obra', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  sinopsis: { type: DataTypes.TEXT },
  imagen: { type: DataTypes.STRING },
  autor: { type: DataTypes.STRING },
  genero: { type: DataTypes.STRING },
  anio: { type: DataTypes.INTEGER },
});

module.exports = Obra;
