function clear() {
  screenValue = 0;
  op = '';
  num1 = 0;
  num2 = 0;
  calcScreen.textContent = '';
}

function editScreen(e) {
  if (screenValue == 0) {
    screenValue = e.target.textContent;
  } else if (screenValue.length < 10) {
    screenValue += e.target.textContent;
  }
  calcScreen.textContent = screenValue;
}

function saveNum1andOp(e) {
  num1 = Number(calcScreen.textContent);
  op = e.target.textContent;
  screenValue = 0;
  calcScreen.textContent = '';
}

function saveNum2andEqual() {
  if (op != '') {
    num2 = Number(calcScreen.textContent);
    if (num2 == 0 && op == '÷') {
      alert('ERROR! Don\'t divide any number by zero!');
      clear();
    } else {
      screenValue = String(operate(op, num1, num2));
      if (screenValue.length > 10) {
        screenValue = String(Number(screenValue).toFixed(10));
      }
      calcScreen.textContent = screenValue;
    }
  }
  op = '';
  num1 = 0;
  num2 = 0;
}

function operate(op, a, b) {
  switch (op) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '×':
      return multiply(a, b);
      break;
    case '÷':
      return divide(a, b);
      break;
    default:
      alert('invalid operator!');
      return;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}