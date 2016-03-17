export default function(){

  function fromDecimal(decVal){
    if (decVal === '5') return "V";
    return "I".repeat(decVal);
  }

  return { fromDecimal };
}