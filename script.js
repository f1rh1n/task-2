let currentValue = '';
let currentOperation = '';
let previousValue = '';

function appendValue(digit) {
  currentValue += digit;
  updateDisplay(currentValue);
}

function updateDisplay(value) {
  document.getElementById('display-area').value = value;
}

function performOperation(operation) {
  if (currentValue !== '') {
    currentOperation = operation;
    previousValue = currentValue;
    currentValue = '';
  }
}

function calculate() {
  if (currentValue !== '' && previousValue !== '') {
    let result;
    switch (currentOperation) {
      case '+':
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case '-':
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case '*':
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case '/':
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
    }
    updateDisplay(result);
    currentValue = result.toString();
    previousValue = '';
    currentOperation = '';
  }
}

function clearDisplay() {
  currentValue = '';
  previousValue = '';
  currentOperation = '';
  updateDisplay('');
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay(currentValue);
}
