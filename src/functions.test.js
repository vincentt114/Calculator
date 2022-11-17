/* eslint-disable no-undef */
const {
  parens, exponent, multipleDivide, addSubtract, calculate,
} = require('./functions');

describe('addSubtract', () => {
  it('returns a number', () => {
    expect(typeof addSubtract(['5', '+', '3'])).toEqual('number');
  });
  it('iteriates through the input array and sums numbers where there is a + symbol', () => {
    expect(addSubtract(['5', '+', '2', '+', '10'])).toEqual(17);
  });
  it('iteriates through the input array and subtracts numbers where there is a - symbol', () => {
    expect(addSubtract(['15', '-', '32', '-', '10'])).toEqual(-27);
  });
});

describe('parens', () => {
  it('returns a string', () => {
    expect(typeof parens('5 * (3 - 1)')).toEqual('string');
  });
  it('updates the input string by calculating the formula within the parentheses first', () => {
    expect(parens('5 * (3 - 1)')).toEqual('5 * 2');
  });
  it('calculates the formula within two parentheses first', () => {
    expect(parens('(3 * 5) + 3 - (2 ^ 2) / 6')).toEqual('15 + 3 - 4 / 6');
  });
  it('calculates the formula within multiple parentheses first', () => {
    expect(parens('(2 - 15) * 5 - (3 + 4 ^ 3) / (19 - 12) / 6')).toEqual('-13 * 5 - 67 / 7 / 6');
  });
});
