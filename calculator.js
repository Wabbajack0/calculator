let buttons = document.querySelectorAll('.numbers');
let calcScreen = document.querySelector('span');
let clearButton = document.querySelector('#clear');
let operators = document.querySelectorAll('.operators');
let equalButton = document.querySelector('#equal');
let screenValue = 0;
let num1 = 0;
let num2 = 0;
let op = '';

clearButton.addEventListener('click', clear);

buttons.forEach(element => {
  element.addEventListener('click', editScreen);
});

operators.forEach(element => {
  element.addEventListener('click', saveNum1andOp);
});

equalButton.addEventListener('click', saveNum2andEqual);