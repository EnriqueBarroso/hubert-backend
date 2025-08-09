const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const obraRoutes = require('./routes/obraRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/obras', obraRoutes);

sequelize.sync()
  .then(() => {
    console.log('📦 Tablas sincronizadas');
    app.listen(3000, () => console.log('🚀 Servidor corriendo en puerto 3000'));
  })
  .catch(err => console.error('❌ Error al sincronizar DB:', err));
