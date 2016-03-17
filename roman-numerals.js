export default function () {

  const DIGITS = new Map([[10, 'X']]);

  function fromDecimal(n) {
    let decVal = Number(n);
    let result = '';
    DIGITS.forEach((roman, decimal) => {
      while (decVal >= decimal) {
        result += roman;
        decVal -= decimal;
      }
    });

    while (decVal >= 9) {
      result += 'IX';
      decVal -= 9;
    }
    while (decVal >= 5) {
      result += 'V';
      decVal -= 5;
    }
    while (decVal >= 4) {
      result += 'IV';
      decVal -= 4;
    }
    while (decVal >= 1) {
      result += 'I';
      decVal -= 1;
    }

    return result;
  }

  return {fromDecimal};

}