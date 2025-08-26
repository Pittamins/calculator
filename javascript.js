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

let firstNum = "";
let secondNum = "";
let operator = "";

function calculate(operator, firstNum, secondNum) {
    console.log(operator);
    let answer = 0;
    if (operator === "+") {
        answer = add(firstNum, secondNum);
    } else if (operator === "-") {
        answer = subtract(firstNum, secondNum);   
    } else if (operator === "x") {
        answer = multiply(firstNum, secondNum);
    } else if (operator === "/") {
        answer = divide(firstNum, secondNum);
    }
    // I tried writing this as a switch statement, but couldn't get it to work right
    // I think I must have had the syntax wrong
    console.log(`answer = ${answer}`);
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
    display.textContent = firstNum + " +";
    operator = "+";
});
subtraction.addEventListener("click", () => {
    display.textContent = firstNum + " -";
    operator = "-";
});
multiplication.addEventListener("click", () => {
    display.textContent = firstNum + " x";
    operator = "x";
});
division.addEventListener("click", () => {
    display.textContent = firstNum + " /";
    operator = "/";
});

one.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "1");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "1");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
two.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "2");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "2");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
three.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "3");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "3");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
four.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "4");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "4");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
five.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "5");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "5");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
six.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "6");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "6");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
seven.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "7");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "7");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
eight.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "8");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "8");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
nine.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "9");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "9");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
zero.addEventListener("click", () => {
    if (operator === "") {
        firstNum = parseInt(firstNum + "0");
        display.textContent = firstNum;
    } else {
        secondNum = parseInt(secondNum + "0");
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});

equals.addEventListener("click", () => {
    const answer = calculate(operator, firstNum, secondNum);
    display.textContent = answer;
    firstNum = answer;
    secondNum = "";
    console.log(`firstNum type: ${typeof firstNum}, firstNum value: ${firstNum}`);
    console.log(`secondNum type: ${typeof secondNum}, secondNum value: ${secondNum}`);
    console.log(`typeof operator = ${typeof operator}`);
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
// - allow chaining operations (e.g., 12 + 7 - 5 = 14)
// - what to do if press = early? 
//     - single number = single number
//     - number and operator = nothing?
//     - both numbers and operator = keep operating the result by the second number
// - snarky response if tries to divide by 0

// EXTRA CREDIT:
// - add in decimal button (that is disabled if already used once in a number)
// - add backspace button
// - add keyboard support
