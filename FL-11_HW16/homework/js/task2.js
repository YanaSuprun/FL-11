const obj1 = { prop: 5 };
const obj2 = create(obj1);

function create (target) {
  let obj = {};
  Object.setPrototypeOf(obj, target);

  return obj;
}
