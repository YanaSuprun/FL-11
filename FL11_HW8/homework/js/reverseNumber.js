const reverseNumber = x => {
  let result = 0;
  while(x) {
    result *= 10;
    result += x % 10;
    x -= x % 10;
    x /= 10;
  }
  return result
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
