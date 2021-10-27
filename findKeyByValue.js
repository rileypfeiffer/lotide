const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  let genres = Object.keys(obj);
  for (let genre of genres) {
    if (obj[genre] === val) {
      return genre;
    }
  }
};



// TEST CASES
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  kids: "Spongebob",
  action: "The Walking Dead"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Spongebob"), "kids");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Spongebob"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Walking Dead"), "action");