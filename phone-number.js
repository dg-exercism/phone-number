//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class PhoneNumber {
  constructor(digits) {
    this.digits = digits
  }

  number() {
    const cleanedNumber = this.digits.replace(/[^0-9]/g, '');
    const first = cleanedNumber[0];
    const second = cleanedNumber[1];
    const exchange = cleanedNumber[3];
    const elExchange = cleanedNumber[4];
    return cleanedNumber.length > 10 && first != 1 ?
      null :
      cleanedNumber.length === 11 && (second == 0 || second == 1 || elExchange == 0 || elExchange == 1) ?
      null :
      cleanedNumber.length === 11 ? 
      cleanedNumber.slice(-10) :
      cleanedNumber.length === 10 && (first == 0 || first == 1 || exchange == 0 || exchange == 1) ?
      null :
      cleanedNumber.length < 10 ? 
      null :
      cleanedNumber
  }
}
