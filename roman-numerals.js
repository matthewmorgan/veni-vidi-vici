const DIGITS = new Map([[1000, 'M'], [900, 'CM'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

export default () => ({
  fromDecimal: (decVal = Number(n)) => {
    let result = '';
    DIGITS.forEach((roman, decimal) => {
      while (decVal >= decimal) {
        result += roman;
        decVal -= decimal;
      }
    });
    return result;
  }
})