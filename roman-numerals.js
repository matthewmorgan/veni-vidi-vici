export default function () {

  const DIGITS = new Map([[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

  function fromDecimal(n) {
    let decVal = Number(n);
    let result = '';
    DIGITS.forEach((roman, decimal) => {
      while (decVal >= decimal) {
        result += roman;
        decVal -= decimal;
      }
    });
    return result;
  }

  return {fromDecimal};

}