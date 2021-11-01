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



module.exports = middle;