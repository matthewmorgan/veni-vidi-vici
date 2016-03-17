import RomanNumerals from './roman-numerals';

const roman = new RomanNumerals();

describe('RomanNumerals', () => {

  it('converts 1 to I', () => {
    expect(roman.fromDecimal('1')).toEqual("I");
  });

  it('converts 2 to II', () => {
    expect(roman.fromDecimal('2')).toEqual("II");
  });

  it('converts 4 to IV', () => {
    expect(roman.fromDecimal('4')).toEqual("IV");
  });

  it('converts 5 to V', () => {
    expect(roman.fromDecimal('5')).toEqual("V");
  });

  it('converts 6 to VI', () => {
    expect(roman.fromDecimal('6')).toEqual("VI");
  });

  it('converts 9 to IX', () => {
    expect(roman.fromDecimal('9')).toEqual("IX");
  });

  it('converts 10 to X', () => {
    expect(roman.fromDecimal('10')).toEqual("X");
  });

  it('converts 20 to XX', () => {
    expect(roman.fromDecimal('20')).toEqual("XX");
  });

  it('converts 40 to XL', () => {
    expect(roman.fromDecimal('40')).toEqual("XL");
  });

  it('converts 50 to L', () => {
    expect(roman.fromDecimal('50')).toEqual("L");
  });

});

