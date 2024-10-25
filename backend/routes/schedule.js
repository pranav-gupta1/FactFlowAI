const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, date, description } = req.body;

  const newSchedule = new Schedule({
    title,
    date,
    description,
  });

  try {
    const savedSchedule = await newSchedule.save();
    res.json(savedSchedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;