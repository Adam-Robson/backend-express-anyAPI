const { Router } = require('express');
const Dogs = require('../models/DogModel');
const Cows = require('../models/CowModel');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const dog = await Dogs.getById(req.params.id);
    res.json(dog);
  })

  .get('/', async (req, res) => {
    const dogs = await Dogs.getAll();
    res.json(dogs);
  })

  .get('/', async (req, res) => {
    const data = await Cows.getAllCows();
    res.json(data);
  });
