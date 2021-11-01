const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]), true);