const { Router } = require('express');
const Dogs = require('../models/DogModel');

module.exports = Router()
  
  .get('/:id', async (req, res) => {
    const dog = await Dogs.getById(req.params.id);
    res.json(dog);
  })

  .get('/', async (req, res) => {
    const dogs = await Dogs.getAll();
    res.json(dogs);
  });
