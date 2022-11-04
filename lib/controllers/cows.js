const { Router } = require('express');
const Cows = require('../models/CowModel');

module.exports = Router()
  .get('/', async (req, res) => {
    const cows = await Cows.getAllCows();
    res.json(cows);
  });
