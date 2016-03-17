export default function () {

  function fromDecimal(n) {
    let decVal = Number(n);
    let result = '';
    if (decVal >= 10) {
      result += 'X';
      decVal -= 10;
    }
    if (decVal >= 5) {
      result += 'V';
      decVal -= 5;
    }
    result += 'I'.repeat(decVal);
    return result;
  }

  return {fromDecimal};

}