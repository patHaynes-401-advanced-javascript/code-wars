
const greeting = (word) => {
  return word.toUpperCase();
};

const speaker = (word, callback) => {
  return callback(greeting(word));
};

const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (value, arr, times, callback) => {
  for(let i = 0; i < times; i++) {
    callback(arr, value);
  } return arr;
};

const removeOne = (num, arr) => {
  if(num % 3 === 2) {
    arr.pop();
  }
};

const removeElements = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], arr);
  } return arr;
};

const removeWithForEach = (arr, callback) => {
  arr.forEach(i => {
    callback(i, arr);
  }); return arr;
};

const removeWithAnon = (arr) => {
  arr.forEach(i => {
    if(i % 3 === 2) {
      arr.pop();
    }
  }); return arr;
};


const createList = (availableItems) => {
  const groceryList = [];
  availableItems.forEach(groceryObject => {
    if(groceryObject.available) {
      groceryList.push(groceryObject.name);
    }
  });
  return groceryList;
};


const fizzBuzz = (arr) => {
  const outPut = [];
  arr.forEach(function(number) {
    if(number % 3 === 0 && number % 5 === 0) {
      outPut.push('Fizz Buzz');
    } else if(number % 3 === 0) {
      outPut.push('Fizz');
    } else if(number % 5 === 0) {
      outPut.push('Buzz');
    } else {
      outPut.push(number);
    }
  });
  return outPut;
};

module.exports = {
  greeting,
  speaker,
  addValues,
  addNumbers,
  removeOne,
  removeElements,
  removeWithForEach,
  removeWithAnon,
  createList,
  fizzBuzz
};