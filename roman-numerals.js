export default function(){

  function fromDecimal(decVal){
    let result = '';
    if (decVal >= '5') {
      result += "V";
      decVal -= 5;
    }
    result += "I".repeat(decVal);
    return result;
  }

  return { fromDecimal };
}