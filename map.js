// Implementation of map function
const arr = [2, 3, 4, 5, 6];

function myMap(arr, cb) {
  const len = arr.length;
  let newArr = [];

  for (let i = 0; i < len; i++) {
    const temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }

  return newArr;
}

const output = myMap(arr, function (value) {
  return value * 2;
});
console.log(output);
