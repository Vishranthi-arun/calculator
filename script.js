let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendDigit(digit) {
  currentInput += digit;
  updateDisplay(currentInput);
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay(currentInput);
  }
}

function setOperator(op) {
  operator = op;
  firstOperand = currentInput;
  currentInput = '';
  updateDisplay(operator);
}

function calculate() {
  secondOperand = currentInput;
  let result;
  
  const num1 = parseInt(firstOperand);
  const num2 = parseInt(secondOperand);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Error';
  }

  updateDisplay(result);
  currentInput = result.toString();
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  secondOperand = '';
  updateDisplay('');
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}