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

  it('converts 90 to XC', () => {
    expect(roman.fromDecimal('90')).toEqual("XC");
  });

  it('converts 100 to C', () => {
    expect(roman.fromDecimal('100')).toEqual("C");
  });

  it('converts 1000 to M', () => {
    expect(roman.fromDecimal('1000')).toEqual("M");
  });

  it('converts 1066 to MLXVI', () => {
    expect(roman.fromDecimal('1066')).toEqual("MLXVI");
  });

  it('converts 1989 to MCMLXXXIX', () => {
    expect(roman.fromDecimal('1989')).toEqual("MCMLXXXIX");
  });

  it('converts 3999 to MMMCMXCIX', () => {
    expect(roman.fromDecimal('3999')).toEqual("MMMCMXCIX");
  });

  it('converts 0 to empty string', () => {
    expect(roman.fromDecimal('0')).toEqual("");
  });

});

describe('RomanNumerals', ()=> {

  it('converts I to 1', () => {
    expect(roman.toDecimal('I')).toEqual(1);
  });

  it('converts II to 2', () => {
    expect(roman.toDecimal('II')).toEqual(2);
  });

});

