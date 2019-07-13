const addOne = x => x +1;

const pipe = (x, ...fns) => {
  let result = x;
  for (let i = 0; i < fns.length; i++) {
    result = fns[i](result);
  }

  return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
console.log(pipe(1, addOne, addOne, addOne));
