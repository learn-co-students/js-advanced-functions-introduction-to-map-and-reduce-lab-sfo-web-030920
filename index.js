// Your code here
function mapToNegativize(arr) {
  return arr.map((num) => num * -1);
}

function mapToNoChange(arr) {
  return arr.map((name) => name);
}

function mapToDouble(arr) {
  return arr.map((num) => num * 2);
}

function mapToSquare(arr) {
  return arr.map((num) => num ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
  const reducer = function (acc, currentValue) {
    if (!!acc == true && !!currentValue == true) {
      return true;
    } else {
      return false;
    }
  };
  return sourceArray.reduce(reducer, true);
}

function reduceToAnyTrue(sourceArray) {
  const reducer = function (acc, currentValue) {
    if (acc == true) {
      return true;
    } else {
      return !!currentValue;
    }
  };
  return sourceArray.reduce(reducer, false);
}
