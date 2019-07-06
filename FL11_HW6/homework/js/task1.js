let a1 = +prompt('Please enter value for a1');
let a2 = +prompt('Please enter value for a2');
let b1 = +prompt('Please enter value for b1');
let b2 = +prompt('Please enter value for b2');
let c1 = +prompt('Please enter value for c1');
let c2 = +prompt('Please enter value for c2');
const divider = 2;
const midpointX = (a1+b1)/divider;
const midpointY = (a2+b2)/divider;

if(c1===midpointX && c2===midpointY) {
  console.log(true);
} else {
  console.log(false);
}