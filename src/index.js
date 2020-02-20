module.exports = function reverse (n) {
  var str = Math.abs(n).toString();
  var arr = str.split('');
  arr.reverse();
  return arr.join('');
}
