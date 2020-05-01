// Your code here
function mapToNegativize(array) {
  const negativizedArray = [];

  for (let i = 0; i < array.length; i++) {
    negativizedArray.push(array[i] * -1);
  }

  return negativizedArray;
}

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  const doubled = [];

  for (let i = 0; i < array.length; i++) {
    doubled.push(array[i] * 2);
  }

  return doubled;
}

function mapToSquare(array) {
  const squared = [];

  for (let i = 0; i < array.length; i++) {
    squared.push(array[i] ** 2);
  }

  return squared;
}

function reduceToTotal(array, startingPoint = 0) {
  let total = startingPoint;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function reduceToAllTrue(array) {
  const trueElements = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      trueElements.push(array[i]);
    }
  }

  if (trueElements.length === array.length) {
    return true;
  } else {
    return false;
  }
}

function reduceToAnyTrue(array) {
  const falseElements = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      falseElements.push(array[i]);
    }
  }

  if (falseElements.length === array.length) {
    return false;
  } else {
    return true;
  }
}
