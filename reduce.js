// Implementation of reduce function
const arr = [2, 3, 4, 5, 65, 21];

function myReduce(arr, cb, acc) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

const sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
console.log(sum);
