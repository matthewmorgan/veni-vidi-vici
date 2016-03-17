export default function () {

  function fromDecimal(n) {
    let decVal = Number(n);
    let result = '';
    while (decVal >= 10) {
      result += 'X';
      decVal -= 10;
    }
    if (decVal >= 9) {
      result += 'IX';
      decVal -= 9;
    }
    if (decVal >= 5) {
      result += 'V';
      decVal -= 5;
    }
    if (decVal >= 4){
      result += 'IV';
      decVal -= 4;
    }
    result += 'I'.repeat(decVal);
    return result;
  }

  return {fromDecimal};

}