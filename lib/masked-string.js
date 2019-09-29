
function mask(num) {
  return num.replace(/.(?=.{4,})/g, '#');
}

function highAndLow(num) {
  console.log(num);
  const numbers = num.split(' ');
  return Math.max.apply(null, numbers) + ' ' + Math.min.apply(null, numbers);
}

module.exports = {
  mask,
  highAndLow
};