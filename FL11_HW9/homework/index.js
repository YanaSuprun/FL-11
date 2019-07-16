// Task 0
const getNumbers = (value) => {
  const result = Array();
  for (let i = 0; i < value.length; i++) {
    if (parseFloat(value[i])) {
      result.push(value[i]);
    }
  }

  return result;
};


// Task 1
const findTypes = (...args) => {
  const result = {}
  for (let i = 0; i < args.length; i++) {
    const key = typeof args[i];
    if (key in result) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

  return result;
};


// Task 2
const executeforEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
};


// Task 3
const mapArray = (arr, func) => {
  const result = Array();
  executeforEach(arr, (elem) => {
    result.push(func(elem));
  });

  return result;
};


// Task 4
const filterArray = (arr, func) => {
  const result = Array();
  executeforEach(arr, (elem) => {
    if (func(elem)) {
      result.push(elem);
    }
  });

  return result;
};


// Task 5
const showFormattedDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();

  return `Date: ${month} ${day} ${year}`
};


// Task 6
const canConvertToDate = date => !!new Date(date).getMonth();


// Task 7
const daysBetween = (date1, date2) => {
  const millisecondsInDay = 86400000;
  let result = Math.round((date2.getTime() - date1.getTime())/millisecondsInDay);

  return result;
};


// Task 8
const getAmountOfAdultPeople = data => {
  const daysInYear = 365;
  const adultsAge = 18;

  return filterArray(data, elem => 
    daysBetween(new Date(elem[' birthday ']), new Date()) / daysInYear > adultsAge).length;
};


// Task 9
const keys = (obj) => {
  const result = Array();
  for( let key in obj ) {
    if (obj.hasOwnProperty(key) ) {
      result.push(key);
    }
  }

  return result;
};


// Task 10
const values = (obj) => {
  const result = Array();
  for( let val in obj ) {
    if (obj.hasOwnProperty(val) ) {
      result.push(obj[val]);
    }
  }

  return result;
};
