// 'use strict';

// Task 1
const getMaxOfArray = numArray => Math.max.apply(this, numArray);
console.log(getMaxOfArray([1,2,357, 3]));


// Task 2
const getCopyOfArray = array => array.slice();
const array = [1,2,3];
const copy = getCopyOfArray(array);
console.log(array, copy);


// Task 3
const obj = {name: 123};

const addUniqueId = (obj) => {
  const clone = {};
  const id = Symbol('id');

  for(let key in obj) {
    clone[key] = obj[key];
  }
  clone[id] = 57;

  return clone;
};

console.log(addUniqueId(obj));
console.log(obj);


// Task 4

const oldObj = {
  name: 'Someone',
  details: {
    id: 1,
    age: 11,
    university: "UNI"
  }
}

const createNewObj = (oldObj) => {
  let {name:firstName, details:{id, age, university}} = oldObj;
  return {university, user:{age, firstName, id}};
}

createNewObj(oldObj);


// Task 5
const arr = [1,5,3,1,3,2,2,7,5];
const findUniqueElements = (arr) => new Set(arr);

findUniqueElements(arr);


// Task 6
const phoneNumber = '0123456789';

const hideNumber = (phoneNumber) => {
  const length = phoneNumber.length;
  return phoneNumber.substring(length-4, length).padStart(10, '*');
}

hideNumber(phoneNumber);

// Task 7
const isRequired = () => { throw new Error('Missing property'); };
const add = (a = isRequired(), b = isRequired()) => a + b; 

add(1, 2);


// Task 8

function getNames(url) {
  fetch(url)
    .then(response => response.json())
    .then(result => {
      const arrayOfNames = result.map(item => item.name).sort();
      console.log(arrayOfNames);

      return arrayOfNames;
    })
    .catch(err => console.log(err));
}

getNames('https://jsonplaceholder.typicode.com/users');

// // task 9

async function getNamesAsync(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const arrayOfNames = result.map(item => item.name).sort();
    console.log(arrayOfNames);

    return arrayOfNames;
  } catch (err) {
    console.log(err);
  }
}

getNamesAsync('https://jsonplaceholder.typicode.com/users');