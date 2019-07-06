let a = +prompt('Please enter value for A side length');
let b = +prompt('Please enter value for B side length');
let c = +prompt('Please enter value for C side length');

if ( a + b > c || a + c > b || c + b > a) {
  if (a === b && a === c && c === b) {
    console.log('Equivalent triangle');
  } else if (a === b && a !== c || a === c && a !== b || c === b && c !== a){
    console.log('Isosceles triangle');
  } else {
    console.log('Normal triangle');
  }
} else {
console.log('Triangle doesn’t exist');
}
