export default function () {

  function fromDecimal(n) {
    let decVal = Number(n);
    let result = '';
    while (decVal >= 10) {
      result += 'X';
      decVal -= 10;
    }
    while (decVal >= 9) {
      result += 'IX';
      decVal -= 9;
    }
    while (decVal >= 5) {
      result += 'V';
      decVal -= 5;
    }
    while (decVal >= 4){
      result += 'IV';
      decVal -= 4;
    }
    while (decVal >= 1){
      result += 'I';
      decVal -= 1;
    }

    return result;
  }

  return {fromDecimal};

}