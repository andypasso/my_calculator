import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = new Big(numberOne);
  const b = new Big(numberTwo);
  let result = '';

  switch (operation) {
    case '+':
      result = a.plus(b).toString();
      break;
    case '-':
      result = a.minus(b).toString();
      break;

    case 'X':
      result = a.times(b).toString();
      break;

    case '÷':
      if (b.toString() === '0') {
        result = 'Math ERROR';
      } else {
        result = a.div(b).toString();
      }
      break;

    case '%':
      result = a.div(100).toString();
      break;

    default:
      result = 'Error';
      break;
  }

  return result;
};

export default operate;
