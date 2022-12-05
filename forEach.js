// Implementation of foreach function

const arr = [1, 2, 3, 4, 5, 6];

function myForEach(arr, cb) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    cb(arr[i], i, arr);
  }
}

let sum = 0;
myForEach(arr, function (value, index, array) {
  console.log(`Value: ${value} Index Number: ${index} Array: ${array}`);
  sum += value;
});
console.log(`Total: ${sum}`);
