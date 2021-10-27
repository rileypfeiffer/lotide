const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("The arrays are equal.");
  } else {
    console.log("The arrays are not equal.");
  }
};

const middle = function(arr) {
  let middle = [];
  if (arr.length < 3) {
    return middle;
  }
  let arrMid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    middle.push(arr[arrMid - 1], arr[arrMid]);
  } else {
    middle.push(arr[arrMid]);
  }
  return middle;
};

assertArraysEqual(middle([1, 2]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([2]));
assertArraysEqual(middle([1, 2, 3, 4 , 5, 6]), ([3, 4]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3]));