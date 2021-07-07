// Add your functions here

function map(sourceArray, operator) {
  let newArray = [];
  sourceArray.forEach( element => {
    newArray.push(operator(element))
  })
  return newArray;
}

function reduce(sourceArray, operator, startingPoint = 0) {
  let result;
  if (startingPoint === 0) {
    result = sourceArray[0];
    for (let i = 1; i < sourceArray.length; i++) {
      result = operator(sourceArray[i], result);
    }
  } else {
    result = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
      result = operator(sourceArray[i], result);
    }
  }
  return result;
}