const express = require('express');
const {
  addCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar
} = require('../controllers/carController');

const router = express.Router();

router.post('/car', addCar);
router.get('/cars', getAllCars);
router.get('/car/:id', getCar);
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

module.exports = {
  routes: router
};
