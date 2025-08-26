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

let firstNum;
let secondNum;
let operator;

function calculate(operator, firstNum, secondNum) {
    console.log(operator);
    let answer = 0;
    if (operator === "plus") {
        answer = add(firstNum, secondNum);
    } else if (operator === "minus") {
        answer = subtract(firstNum, secondNum);   
    } else if (operator === "times") {
        answer = multiply(firstNum, secondNum);
    } else if (operator === "dividedBy") {
        answer = divide(firstNum, secondNum);
    }
    // I tried writing this as a switch statement, but couldn't get it to work right
    // I think I must have had the syntax wrong
    console.log(answer);
    return answer;
}

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

const equals = document.querySelector("#equals");

const display = document.querySelector(".display");

const clear = document.querySelector("#clear");

const keypad = document.querySelector(".keypad");

addition.addEventListener("click", () => {
    display.textContent = "+";
    operator = "plus";
});
subtraction.addEventListener("click", () => {
    display.textContent = "-";
    operator = "minus";
});
multiplication.addEventListener("click", () => {
    display.textContent = "x";
    operator = "times";
});
division.addEventListener("click", () => {
    display.textContent = "/";
    operator = "dividedBy";
});

one.addEventListener("click", () => {
    display.textContent = "1";
    if (!firstNum) {
        firstNum = 1;
    } else {
        secondNum = 1;
    }
});
two.addEventListener("click", () => {
    display.textContent = "2";
    if (!firstNum) {
        firstNum = 2;
    } else {
        secondNum = 2;
    }
});
three.addEventListener("click", () => {
    display.textContent = "3";
    if (!firstNum) {
        firstNum = 3;
    } else {
        secondNum = 3;
    }
});
four.addEventListener("click", () => {
    display.textContent = "4";
    if (!firstNum) {
        firstNum = 4;
    } else {
        secondNum = 4;
    }
});
five.addEventListener("click", () => {
    display.textContent = "5";
    if (!firstNum) {
        firstNum = 5;
    } else {
        secondNum = 5;
    }
});
six.addEventListener("click", () => {
    display.textContent = "6";
    if (!firstNum) {
        firstNum = 6;
    } else {
        secondNum = 6;
    }
});
seven.addEventListener("click", () => {
    display.textContent = "7";
    if (!firstNum) {
        firstNum = 7;
    } else {
        secondNum = 7;
    }
});
eight.addEventListener("click", () => {
    display.textContent = "8";
    if (!firstNum) {
        firstNum = 8;
    } else {
        secondNum = 8;
    }
});
nine.addEventListener("click", () => {
    display.textContent = "9";
    if (!firstNum) {
        firstNum = 9;
    } else {
        secondNum = 9;
    }
});
zero.addEventListener("click", () => {
    display.textContent = "0";
    if (!firstNum) {
        firstNum = 0;
    } else {
        secondNum = 0;
    }
});

equals.addEventListener("click", () => {
    display.textContent = `${calculate(operator, firstNum, secondNum)}`;
    // also, my calculator only works with single digits for now
    // might need to add numbers to an array, then join or use concat 
    // for multiple digits
    // console.log(calculate(operator, firstNum, secondNum))
    console.log(firstNum);
    console.log(secondNum);
    console.log(typeof operator);
})

clear.addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    display.textContent = "0";
})

const buttons = document.querySelectorAll("button");

keypad.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
})

keypad.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
})

keypad.addEventListener("mousedown", (event) => {
    event.target.classList.toggle("mousedown");
})

keypad.addEventListener("mouseup", (event) => {
    event.target.classList.toggle("mousedown");
})




// To Do:
// - round decimals to 2 places
// - create a way for multi-digit numbers (concat or arrays?)
// - allow chaining operations (e.g., 12 + 7 - 5 = 14)
// - show all the operation on the display
// - what to do if press = early? 
//     - single number = single number
//     - number and operator = nothing?
//     - both numbers and operator = keep operating the result by the second number
// - snarky response if tries to divide by 0

// EXTRA CREDIT:
// - add in decimal button (that is disabled if already used once in a number)
// - add backspace button
// - add keyboard support
