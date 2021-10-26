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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let j = 0;
    let found = false;
    while (j < itemsToRemove.length && found === false) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
      }
      if (found === false && j === itemsToRemove.length - 1) {
        result.push(source[i]);
      }
      j++;
    }
  }
  return result;
};

// TEST CASES
const words = [1, 2, 3];
console.log(without(words, [1, 2, "3"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
