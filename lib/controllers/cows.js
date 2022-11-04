const { Router } = require('express');
const Cows = require('../models/CowModel');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const cow = await Cows.getById(req.params.id);
    res.json(cow);
  })

  .get('/', async (req, res) => {
    const cows = await Cows.getAllCows();
    res.json(cows);
  });
