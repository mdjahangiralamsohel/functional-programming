// Implementation of filter function
const arr = [1, 2, 4, 6, 7, 8, 21, 24];

function myFilter(arr, cb) {
  const len = arr.length;
  let newArr = [];

  for (let i = 0; i < len; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const evenResult = myFilter(arr, function (value) {
  return value % 2 === 0;
});

const oddResult = myFilter(arr, function (value) {
  return value % 2 === 1;
});

const greaterResult = myFilter(arr, function (value) {
  return value > 10;
});

console.log(evenResult);
console.log(oddResult);
console.log(greaterResult);
