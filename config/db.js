const { Sequelize } = require('sequelize');

// Configuración directa para Railway
const sequelize = new Sequelize(
  "railway",
  "root",
  "AVYRIaErIpFgmSHjGnITZqFtwrLRQxNh",
  {
    host: "shuttle.proxy.rlwy.net",
    port: 25567,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
