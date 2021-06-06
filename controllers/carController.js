/* eslint-disable no-unused-vars */
const firebase = require('../db');
const Car = require('../models/car');

const firestore = firebase.firestore();

const addCar = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection('cars').doc().set(data);
    res.send('Record saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllCars = async (req, res, next) => {
  try {
    const cars = await firestore.collection('cars');
    const data = await cars.get();
    const carsArray = [];
    if (data.empty) {
      res.status(404).send('No car record found');
    } else {
      data.forEach((doc) => {
        const car = new Car(
          doc.id,
          doc.data().nome,
          doc.data().foto,
          doc.data().preco
        );
        carsArray.push(car);
      });
      res.send(carsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await firestore.collection('cars').doc(id);
    const data = await car.get();
    if (!data.exists) {
      res.status(404).send('car with the given ID not found');
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const car = await firestore.collection('cars').doc(id);
    await car.update(data);
    res.send('car record updated successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    await firestore.collection('cars').doc(id).delete();
    res.send('Record deleted successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar
};
