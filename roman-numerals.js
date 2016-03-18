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
  toDecimal:   (romanInput) => {
    let decimalResult = 0;
    let romanDigits = romanInput.split('');

    while (romanDigits.slice(0, 1).join('') === 'X') {
      decimalResult += 10;
      romanDigits.shift();
    }

    if (romanDigits.slice(0, 2).join('') === 'IX') {
      decimalResult += 9;
      romanDigits.shift();
      romanDigits.shift();
    }

    if (romanDigits.slice(0, 1).join('') === 'V') {
      decimalResult += 5;
      romanDigits.shift();
    }
    if (romanDigits.slice(0, 2).join('') === 'IV') {
      decimalResult += 4;
      romanDigits.shift();
      romanDigits.shift();
    }

    decimalResult += romanDigits.length;
    return decimalResult;
  }
})