const functions = class {
  static parens(string) {
    let output = string;
    for (let i = 0; i < output.length; i += 1) {
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
  }

  static exponent(string) {
    const array = string.split(' ');
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === '^') {
        array.splice(i - 1, 3, Number(array[i - 1]) ** Number(array[i + 1]));
        i -= 1;
      }
    }
    return array;
  }

  static multiplyDivide(array) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === '*') {
        array.splice(i - 1, 3, Number(array[i - 1]) * Number(array[i + 1]));
        i -= 1;
      } else if (array[i] === '/') {
        array.splice(i - 1, 3, Number(array[i - 1]) / Number(array[i + 1]));
        i -= 1;
      }
    }
    return array;
  }

  static addSubtract(array) {
    let output = Number(array[0]);
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] === '-') {
        output -= Number(array[i + 1]);
      } else if (array[i] === '+') {
        output += Number(array[i + 1]);
      }
    }
    return output;
  }

  static calculate = (input) => {
    const string = this.parens(input);
    let array = this.exponent(string);
    array = this.multiplyDivide(array);
    return this.addSubtract(array);
  };
};

module.exports = functions;
