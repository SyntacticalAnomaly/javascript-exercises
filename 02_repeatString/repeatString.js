const repeatString = function(inputString, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let returnString = '';
  for (let i=0;i<num;i++) {
    returnString += inputString;
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
