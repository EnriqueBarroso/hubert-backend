const Obra = require('../models/Obra');

exports.getObras = async (req, res) => {
  try {
    const obras = await Obra.findAll();
    res.json(obras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener obras' });
  }
};

exports.createObra = async (req, res) => {
  try {
    const nuevaObra = await Obra.create(req.body);
    res.status(201).json(nuevaObra);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear obra' });
  }
};
