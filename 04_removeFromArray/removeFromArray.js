const removeFromArray = function(inputArray, ...args) {
  let inputLength = inputArray.length;
  let argsLength = args.length;
  for (let i=0;i<inputLength;i++) {
    for (let j=0;j<argsLength;j++) {
      if (inputArray[i] === args[j]) {
        inputArray.splice(i, 1);
        i--;
      }
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
