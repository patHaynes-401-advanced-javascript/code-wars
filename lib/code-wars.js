
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

function accum(s) {
  const letters = s.split('');
  const result = [];
  for(let i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

function queueTime(customers, registers) {
  var queueArr = [];
  for(var i = 0; i < registers; i++) {
    queueArr.push(0);
  }
  // console.log(queueArr)
  for(var j = 0; j < customers.length; j++) {
    queueArr[0] += customers[j];
    queueArr.sort(function(a, b) {
      return a - b;
    });
  }

  return queueArr[queueArr.length - 1];
}



module.exports = {
  mask,
  highAndLow,
  findTheNonRepeating,
  accum,
  queueTime
};