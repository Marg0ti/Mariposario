// routes/mariposas.js
const express = require('express');
const router = express.Router();
const Butterfly = require('../models/Butterfly'); 
// GET /mariposas
router.get('/', async (req, res) => {
  try {
    const mariposas = await Butterfly.find();
    res.json(mariposas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
