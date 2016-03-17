import RomanNumerals from './roman-numerals';

const roman = new RomanNumerals();

describe('RomanNumerals', () => {

  it('converts 1 to I', () => {
    expect(roman.fromDecimal('1')).toEqual("I");
  });

  it('converts 2 to II', () => {
    expect(roman.fromDecimal('2')).toEqual("II");
  });

});

