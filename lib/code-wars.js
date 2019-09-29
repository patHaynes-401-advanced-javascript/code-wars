
function mask(num) {
  return num.replace(/.(?=.{4,})/g, '#');
}

function highAndLow(num) {
  const numbers = num.split(' ');
  return Math.max.apply(null, numbers) + ' ' + Math.min.apply(null, numbers);
}

function findTheNonRepeating(str) {
  let result = 0;
  const arr = str.split('');
  let numIndex = 0;

  for(let i = 0; i < arr.length; i++) {
    numIndex = 0;
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        numIndex += 1;
      }
    }
    if(numIndex < 2) {
      result = arr[i];
      break;
    }
  }
  return result;
}

module.exports = {
  mask,
  highAndLow,
  findTheNonRepeating
};