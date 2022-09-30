let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch (numOrStr && numOrStr.trim() && isNaN(+numOrStr)) {
  case null:
    console.log('вы отменили');
    break;
  case '':
    console.log('Empty String');
    break;
  case true:
    console.log(' number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}
