/* eslint-disable no-plusplus */
const functions = {};

functions.parens = (string) => {
  let output = string;
  for (let i = 0; i < output.length; i++) {
    if (output[i] === '(') {
      const begin = i;
      const end = output.indexOf(')');
      const parens = output.slice(begin + 1, end);
      const calculateParens = functions.calculate(parens);
      const beforeParens = output.slice(0, begin);
      const afterParens = output.slice(end + 1, output.length);
      output = beforeParens + calculateParens + afterParens;
    }
  }
  return output;
};

functions.exponent = (string) => {
  const array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '^') {
      array.splice(i - 1, 3, array[i - 1] ** array[i + 1]);
      i--;
    }
  }
  return array;
};

functions.multiplyDivide = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '*') {
      array.splice(i - 1, 3, array[i - 1] * array[i + 1]);
      i--;
    } else if (array[i] === '/') {
      array.splice(i - 1, 3, array[i - 1] / array[i + 1]);
      i--;
    }
  }
  return array;
};

functions.addSubtract = (array) => {
  let output = Number(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (array[i] === '-') {
      output -= Number(array[i + 1]);
    } else if (array[i] === '+') {
      output += Number(array[i + 1]);
    }
  }
  return output;
};

functions.calculate = (input) => {
  const string = functions.parens(input);
  let array = functions.exponent(string);
  array = functions.multiplyDivide(array);
  return functions.addSubtract(array);
};

module.exports = functions;
