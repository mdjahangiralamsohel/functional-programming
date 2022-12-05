function calculation(a, b, cb) {
  const c = a + b;
  const d = a - b;
  const result = cb(c, d);
  return result;
}

const sum = calculation(5, 2, function (c, d) {
  return c + d;
});

const sub = calculation(5, 2, function (c, d) {
  return c - d;
});

const mutiply = calculation(5, 2, function (c, d) {
  return c * d;
});

const divide = calculation(5, 2, function (c, d) {
  return c / d;
});

console.log(sum);
console.log(sub);
console.log(mutiply);
console.log(divide);
