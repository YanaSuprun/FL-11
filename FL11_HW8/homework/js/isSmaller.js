const isBigger = (a, b) => a > b;

const isSmaller = (a, b) => !isBigger(a, b) && a !== b;

console.log(isSmaller(5, -1));