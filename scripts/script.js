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
    return x % y;
}

function operate(firstNumber, operation, secondNumber) {
    switch (operation) {
        case '+':
            return add(+firstNumber, +secondNumber);
        case '−':
            return subtract(+firstNumber, +secondNumber);
        case '÷':
            return divide(+firstNumber, +secondNumber);
        case '×':
            return multiply(+firstNumber, +secondNumber);
        case '%':
            return modulo(+firstNumber, +secondNumber);
    }
}

function parseInput(equationText) {
    let arrParsed = equationText.split(' ');
    return arrParsed;
}

const calcScreenTextOne = document.querySelector('#calcScreenTextOne');
const calcScreenTextTwo = document.querySelector('#calcScreenTextTwo');

const btnModulo = document.querySelector('#btnModulo');
const btnAdd = document.querySelector('#btnAdd');
const btnMinus = document.querySelector('#btnMinus');
const btnDivide = document.querySelector('#btnDivide');
const btnMultiply = document.querySelector('#btnMultiply');
const btnEquals = document.querySelector('#btnEquals');

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
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '1';
  });

btn2.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '2';
});

btn3.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '3';
});

btn4.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '4';
});

btn5.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '5';
});

btn6.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '6';
});

btn7.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '7';
});

btn8.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '8';
});

btn9.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '9';
});

btn0.addEventListener('click', () => {
    noInitialZero();
    calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + '0';
  });

btnModulo.addEventListener('click', () => {
    if (checkIfRepeatOperations()) {
        let arrParsed = parseInput(calcScreenTextOne.textContent);
        calcScreenTextTwo.textContent = operate(arrParsed[0], arrParsed[1], calcScreenTextTwo.textContent);
    }
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " %";
    calcScreenTextTwo.textContent = '0';
});

btnAdd.addEventListener('click', () => {
    if (checkIfRepeatOperations()) {
        let arrParsed = parseInput(calcScreenTextOne.textContent);
        calcScreenTextTwo.textContent = operate(arrParsed[0], arrParsed[1], calcScreenTextTwo.textContent);
    }
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " +";
    calcScreenTextTwo.textContent = '0';
});

btnMinus.addEventListener('click', () => {
    if (checkIfRepeatOperations()) {
        let arrParsed = parseInput(calcScreenTextOne.textContent);
        calcScreenTextTwo.textContent = operate(arrParsed[0], arrParsed[1], calcScreenTextTwo.textContent);
    }
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " −";
    calcScreenTextTwo.textContent = '0';
});

btnDivide.addEventListener('click', () => {
    if (checkIfRepeatOperations()) {
        let arrParsed = parseInput(calcScreenTextOne.textContent);
        calcScreenTextTwo.textContent = operate(arrParsed[0], arrParsed[1], calcScreenTextTwo.textContent);
    }
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " ÷";
    calcScreenTextTwo.textContent = '0';
});

btnMultiply.addEventListener('click', () => {
    if (checkIfRepeatOperations()) {
        let arrParsed = parseInput(calcScreenTextOne.textContent);
        calcScreenTextTwo.textContent = operate(arrParsed[0], arrParsed[1], calcScreenTextTwo.textContent);
    }
    calcScreenTextOne.textContent = calcScreenTextTwo.textContent + " ×";
    calcScreenTextTwo.textContent = '0';
});

btnPlusMinus.addEventListener('click', () => {
    if (calcScreenTextTwo.textContent.substring(0,1) == "-") {
        calcScreenTextTwo.textContent = calcScreenTextTwo.textContent.slice(1);
    }
    else {
        calcScreenTextTwo.textContent = '-' + calcScreenTextTwo.textContent;
    }
});

btnEquals.addEventListener('click', () => {
    if (calcScreenTextOne.textContent != '') {
        calcScreenTextOne.textContent = calcScreenTextOne.textContent + " " + calcScreenTextTwo.textContent + " =";
        let arrParsed = parseInput(calcScreenTextOne.textContent);
        calcScreenTextTwo.textContent = "" + operate(arrParsed[0], arrParsed[1], arrParsed[2]);
    }
});

btnAC.addEventListener('click', () => {
    calcScreenTextOne.textContent = '';
    calcScreenTextTwo.textContent = '0';
});

btnC.addEventListener('click', () => {
        calcScreenTextTwo.textContent = calcScreenTextTwo.textContent.substring(0, calcScreenTextTwo.textContent.length-1);
        if (calcScreenTextTwo.textContent == ("") || calcScreenTextTwo.textContent == ("-")) {
            calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + "0";
        }
});

btnDecimal.addEventListener('click', () => {
    if (checkIfDecimal() == false) {
        calcScreenTextTwo.textContent = calcScreenTextTwo.textContent + ".";
    }
});

function noInitialZero() {
    if (calcScreenTextTwo.textContent.substring(0,1) == "-") {
        if (calcScreenTextTwo.textContent.substring(1,2) == "0") {
            calcScreenTextTwo.textContent = "-";
        }
    }
    else if (calcScreenTextTwo.textContent.substring(0,1) == "0") {
        calcScreenTextTwo.textContent = "";
    }
}

function checkIfRepeatOperations() {
    if (parseInput(calcScreenTextOne.textContent).length == 2) {
        return true;
    }
    else {
        return false;
    }
}

function checkIfDecimal() {
    let reDot = /[.]/g;
    if (calcScreenTextTwo.textContent.search(reDot) > 0) {
        return true;
    }
    else {
        return false;
    }
}