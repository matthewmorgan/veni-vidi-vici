const DIGITS = new Map([[1000, 'M'], [900, 'CM'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

export default () => ({
  fromDecimal: (decimalInput = Number(n)) => {
    let romanResult = '';
    DIGITS.forEach((romanSymbol, decimalValue) => {
      while (decimalInput >= decimalValue) {
        romanResult += romanSymbol;
        decimalInput -= decimalValue;
      }
    });
    return romanResult;
  },
  toDecimal: (romanInput) => {
    return 1;
  }
})