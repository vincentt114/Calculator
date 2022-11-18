/* eslint-disable no-undef */
const {
  parens, exponent, multiplyDivide, addSubtract, calculate,
} = require('./functions');

describe('addSubtract', () => {
  it('returns a number', () => {
    expect(typeof addSubtract(['5', '+', '3'])).toEqual('number');
  });
  it('iterates through the input array and sums numbers where there is a + symbol', () => {
    expect(addSubtract(['5', '+', '2', '+', '10'])).toBe(17);
  });
  it('iterates through the input array and subtracts numbers where there is a - symbol', () => {
    expect(addSubtract(['15', '-', '32', '-', '10'])).toBe(-27);
  });
  it('iterates through the array and sums/subtracts', () => {
    expect(addSubtract(['5', '+', '10', '-', '2'])).toBe(13);
  });
});

describe('multiplyDivide', () => {
  it('returns an array', () => {
    expect(Array.isArray(multiplyDivide(['11', '*', '3', '+', '2', '/', '4']))).toEqual(true);
  });
  it('iterates through the input array and multiplies numbers where there is a * symbol', () => {
    expect(multiplyDivide(['5', '*', '2', '*', '3'])).toEqual([30]);
  });
  it('iterates through the input array and divides numbers where there is a / symbol', () => {
    expect(multiplyDivide(['100', '/', '2', '/', '5'])).toEqual([10]);
  });
  it('iteriates through the input array and only acts upon the * and / symbols, leaving other symbols alone', () => {
    expect(multiplyDivide(['10', '*', '3', '+', '4', '-', '3', '+', '20', '/', '5'])).toEqual([30, '+', '4', '-', '3', '+', 4]);
  });
});

describe('exponent', () => {
  it('returns an array', () => {
    expect(Array.isArray(exponent('5 ^ 2'))).toBe(true);
  });
  it('iterates through the input string and performs an exponential calculation where there is a ^ symbol', () => {
    expect(exponent('4 ^ 3')).toEqual([64]);
  });
  it('iterates through the input string and only acts upon the ^ symbols, leaving other symbols alone', () => {
    expect(exponent('2 ^ 6 + 5 * 3 - 4 ^ 3')).toEqual([64, '+', '5', '*', '3', '-', 64]);
  });
});

describe('parens', () => {
  it('returns a string', () => {
    expect(typeof parens('5 * (3 - 1)')).toBe('string');
  });
  it('updates the input string by calculating the formula within the parentheses first', () => {
    expect(parens('5 * (3 - 1)')).toBe('5 * 2');
  });
  it('calculates the formula within two parentheses first', () => {
    expect(parens('(3 * 5) + 3 - (2 ^ 2) / 6')).toBe('15 + 3 - 4 / 6');
  });
  it('calculates the formula within multiple parentheses first', () => {
    expect(parens('(2 - 15) * 5 - (3 + 4 ^ 3) / (19 - 12) / 6')).toBe('-13 * 5 - 67 / 7 / 6');
  });
});

describe('calculate', () => {
  it('returns a number', () => {
    expect(typeof calculate('5')).toBe('number');
  });
  it('handles addition', () => {
    expect(calculate('5 + 7 + 3')).toBe(15);
  });
  it('handles subtraction', () => {
    expect(calculate('40 - 8 - 16')).toBe(16);
  });
  it('handles a mix of adding addition and subtraction', () => {
    expect(calculate('12 + 16 - 4 + 3 -10')).toBe(27);
  });
  it('handles multiplication', () => {
    expect(calculate('5 * 3 * 2 * 10')).toBe(300);
  });
  it('handles division', () => {
    expect(calculate('200 / 4 / 5')).toBe(10);
  });
  it('handles a mix of multiplication and division', () => {
    expect(calculate('6 * 12 / 2')).toBe(36);
  });
  it('handles a mix of multiplication, division, addition and subtraction, by performing calculations in the correct order', () => {
    expect(calculate('12 * 10 + 16 - 48 / 4')).toBe(124);
  });
  it('handles exponents', () => {
    expect(calculate('4 ^ 3')).toBe(64);
  });
  it('handles a mix of exponents, multiplication and divison, by performing calculations in the correct order', () => {
    expect(calculate('5 ^ 3 * 2 ^ 2 / 25')).toBe(20);
  });
  it('handles a mix of exponents, addition, subtraction, multiplication and division, by performing calculations in the correct order', () => {
    expect(calculate('1000 - 5 * 3 + 4 ^ 3 / 8')).toBe(993);
  });
  it('handles nested parentheses', () => {
    expect(calculate('6 + (20 - (4 * 3))')).toBe(14);
    expect(calculate('2 * (4 * (12 - 9) + 7)')).toBe(38);
    expect(calculate('(19 + 11) * (100 / (5 * 4 + 5))')).toBe(120);
  });
  it('handles parentheses, exponents, multiplication, division, addition, and subtraction, by performing calculations in the correct order', () => {
    expect(calculate('6 ^ (8 - 2 * 3) / 2')).toBe(18);
    expect(calculate('44 + 10 * (3 * 2) ^ 2 - 200')).toBe(204);
    expect(calculate('(4 + 3 * 16) + ( 2 ^ 2 )')).toBe(52);
    expect(calculate('(12 * 4 - 12) / 2 ^ 2 + (40 - 18)')).toBe(31);
  });
});
