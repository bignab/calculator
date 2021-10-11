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

    }
}