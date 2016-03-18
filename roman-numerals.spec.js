import RomanNumerals from './roman-numerals';

const roman = new RomanNumerals();

describe('RomanNumerals', () => {

  function convert(n) { return roman.fromDecimal(n) }

  it('converts 1 to I', () => {
    expect(convert('1')).toEqual("I");
  });

  it('converts 2 to II', () => {
    expect(convert('2')).toEqual("II");
  });

  it('converts 4 to IV', () => {
    expect(convert('4')).toEqual("IV");
  });

  it('converts 5 to V', () => {
    expect(convert('5')).toEqual("V");
  });

  it('converts 6 to VI', () => {
    expect(convert('6')).toEqual("VI");
  });

  it('converts 9 to IX', () => {
    expect(convert('9')).toEqual("IX");
  });

  it('converts 10 to X', () => {
    expect(convert('10')).toEqual("X");
  });

  it('converts 20 to XX', () => {
    expect(convert('20')).toEqual("XX");
  });

  it('converts 40 to XL', () => {
    expect(convert('40')).toEqual("XL");
  });

  it('converts 50 to L', () => {
    expect(convert('50')).toEqual("L");
  });

  it('converts 90 to XC', () => {
    expect(convert('90')).toEqual("XC");
  });

  it('converts 100 to C', () => {
    expect(convert('100')).toEqual("C");
  });

  it('converts 1000 to M', () => {
    expect(convert('1000')).toEqual("M");
  });

  it('converts 1066 to MLXVI', () => {
    expect(convert('1066')).toEqual("MLXVI");
  });

  it('converts 1989 to MCMLXXXIX', () => {
    expect(convert('1989')).toEqual("MCMLXXXIX");
  });

  it('converts 3999 to MMMCMXCIX', () => {
    expect(convert('3999')).toEqual("MMMCMXCIX");
  });

  it('converts 0 to empty string', () => {
    expect(convert('0')).toEqual("");
  });

});

describe('RomanNumerals', ()=> {

  function convert(n) { return roman.toDecimal(n) }

  it('converts I to 1', () => {
    expect(convert('I')).toEqual(1);
  });

  it('converts II to 2', () => {
    expect(convert('II')).toEqual(2);
  });

  it('converts IV to 4', () => {
    expect(convert('IV')).toEqual(4);
  });

  it('converts V to 5', () => {
    expect(convert('V')).toEqual(5);
  });

  it('converts VI to 6', () => {
    expect(convert('VI')).toEqual(6);
  });

  it('converts IX to 9', () => {
    expect(convert('IX')).toEqual(9);
  });

  it('converts X to 10', () => {
    expect(convert('X')).toEqual(10);
  });

  it('converts XX to 20', () => {
    expect(convert('XX')).toEqual(20);
  });

  it('converts XL to 40', () => {
    expect(convert('XL')).toEqual(40);
  });

  it('converts L to 50', () => {
    expect(convert('L')).toEqual(50);
  });

  it('converts XC to 90', () => {
    expect(convert('XC')).toEqual(90);
  });

  it('converts C to 100', () => {
    expect(convert('C')).toEqual(100);
  });

  it('converts M to 1000', () => {
    expect(convert('M')).toEqual(1000);
  });

  it('converts MLXVI to 1066', () => {
    expect(convert('MLXVI')).toEqual(1066);
  });

  it('converts MCMLXXXIX to 1989', () => {
    expect(convert('MCMLXXXIX')).toEqual(1989);
  });

  it('converts MMMCMXCIX to 3999', () => {
    expect(convert('MMMCMXCIX')).toEqual(3999);
  });

  it('converts empty string to 0', () => {
    expect(convert('')).toEqual(0);
  });

});

