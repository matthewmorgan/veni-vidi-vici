const DIGITS = new Map([[1000, 'M'], [900, 'CM'], [100, 'C'], [90, 'XC'], [50, 'L'],
                        [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

export default class RomanNumerals {

  fromDecimal(n) {
    let decimalInput = Number(n);
    let romanResult = '';
    DIGITS.forEach((romanSymbol, decimalValue) => {
      while (decimalInput >= decimalValue) {
        romanResult += romanSymbol;
        decimalInput -= decimalValue;
      }
    });

    return romanResult;
  }

  toDecimal(n) {
    let decimalResult = 0;
    let romanDigits = n.split('');

    while (romanDigits.length > 0) {
      DIGITS.forEach((romanSymbol, decimalValue) => {
        if (romanDigits.slice(0, romanSymbol.length).join('') === romanSymbol) {
          decimalResult += decimalValue;
          romanDigits.splice(0, romanSymbol.length);
        }
      });
    }

    return decimalResult;
  }
}