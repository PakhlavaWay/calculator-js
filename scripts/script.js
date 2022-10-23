// DOM elements
let input = document.querySelector('.calculator__screen input');
const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('.calculator__clear');
const operatorButtons = document.querySelectorAll('.operator');
const resultButton = document.querySelector('.calculator__result');
const negative = document.querySelector('.calculator__negative');


// functions
function clear() {
  input.value = '';
}

function display(value) {
  input.value += value;
}

const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const substract = (a, b) => a - b;
const add = (a, b) => a + b;

// process
let prevValue;
let operator;

negative.addEventListener('click', () => {
  display('-');
})

numbers.forEach( number => {
  number.addEventListener('click', (e) => {
    e.target.textContent === '.' 
    ?  display(e.target.textContent)
    :  display(+e.target.textContent);
  })
} )

clearButton.addEventListener('click', () => {
  clear();
})

operatorButtons.forEach( button => {
  button.addEventListener('click', (e) => {
    if (e.target.className.includes('calculator__addition')) {
      prevValue = input.value;
      operator = 'plus';
    }
    
    if (e.target.className.includes('calculator__substraction')) {
      prevValue = input.value;
      operator = 'minus';
    }
    
    if (e.target.className.includes('calculator__multiplication')) {
      prevValue = input.value;
      operator = 'times';
    }
    
    if (e.target.className.includes('calculator__division')) {
      prevValue = input.value;
      operator = 'divide';
    }
    
    clear();
  })
})

resultButton.addEventListener('click', () => {
  let result;
  if (operator === 'plus') {
    result = add(+prevValue, +input.value);
    clear();
    display(result);
  }
  
  if (operator === 'minus') {
    result = substract(+prevValue, +input.value);
    clear();
    display(result);
  }
  
  if (operator === 'times') {
    result = multiply(+prevValue, +input.value);
    clear();
    display(result);
  }
  
  if (operator === 'divide') {
    result = divide(+prevValue, +input.value);
    clear();
    display(result);
  }
})





