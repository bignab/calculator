function add(x, y) {
    return x + y; 
}

function subtract(x, y) {
    return x - y; 
}

function divide(x, y) {
    if (y == 0) {
        return "Error: Divide by Zero";
    }

    else {
        return x / y;
    }
}

function multiply(x, y) {
    return x * y;
}

function modulo(x, y) {
    return x * y;
}

function operate(firstNumber, secondNumber, operation) {
    switch (operation) {
        case 'add':
            add(firstNumber, secondNumber);
            break;
        case 'subtract':
            subtract(firstNumber, secondNumber);
            break;
        case 'divide':
            divide(firstNumber, secondNumber);
            break;
        case 'multiply':
            multiply(firstNumber, secondNumber);
            break;
        case 'modulo':
            modulo(firstNumber, secondNumber);
            break;
    }
}

const calcScreenTextOne = document.querySelector('#calcScreenTextOne');
const calcScreenTextTwo = document.querySelector('#calcScreenTextTwo');

const btnModulo = document.querySelector('#btnModulo');
const btnAdd = document.querySelector('#btnAdd');
const btnMinus = document.querySelector('#btnMinus');
const btnDivide = document.querySelector('#btnDivide');
const btnMultiply = document.querySelector('#btnMultiply');
// const btnEquals = document.querySelector('#btnEquals');

const btnAC = document.querySelector('#btnAC');
const btnC = document.querySelector('#btnC');
const btnDecimal = document.querySelector('#btnDecimal');
const btnPlusMinus = document.querySelector('#btnPlusMinus');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');

btn1.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '1';
  });

btn2.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '2';
});

btn3.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '3';
});

btn4.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '4';
});

btn5.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '5';
});

btn6.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '6';
});

btn7.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '7';
});

btn8.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '8';
});

btn9.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '9';
});

btn0.addEventListener('click', () => {
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '0';
  });

btnModulo.addEventListener('click', () => {
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " %";
    calcScreenTextTwo.textContent = '';
});

btnAdd.addEventListener('click', () => {
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " +";
    calcScreenTextTwo.textContent = '';
});

btnMinus.addEventListener('click', () => {
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " −";
    calcScreenTextTwo.textContent = '';
});

btnDivide.addEventListener('click', () => {
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " ÷";
    calcScreenTextTwo.textContent = '';
});

btnMultiply.addEventListener('click', () => {
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " ×";
    calcScreenTextTwo.textContent = '';
});

btnEquals.addEventListener('click', () => {
    if (calcScreenTextOne.textContent != '') {
        calcScreenTextOne.textContent = calcScreenTextOne.textContent + " " + calcScreenTextTwo.textContent + " =";
        calcScreenTextTwo.textContent = '';
    }
});