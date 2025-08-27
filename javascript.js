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
    } else if (operator === "") {
        answer = firstNum;
    }
    // I tried writing this as a switch statement, but couldn't get it to work right
    // I think I must have had the syntax wrong
    console.log(`answer = ${answer}`);
    return Math.round(answer * 100) / 100;
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

const decimal = document.querySelector("#decimal"); 

const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

const equals = document.querySelector("#equals");

const display = document.querySelector(".display");

const clear = document.querySelector("#clear");

const backButton = document.querySelector("#backspace");

const keypad = document.querySelector(".keypad");

addition.addEventListener("click", () => {
    if (operator === "/" && firstNum !== "" && secondNum === 0) {
        display.textContent = "No dividing by zero!"; 
        console.log(`first num = ${firstNum}, secondNum = ${secondNum}, operator = ${operator}`)
        firstNum = "";
        secondNum = "";
        operator = "";
    } else if (operator !== "" && secondNum !== "") {
        firstNum = calculate(operator, firstNum, secondNum);
        secondNum = "";
        display.textContent = firstNum + " +";
        operator = "+";
    } else if (operator === "" && (firstNum === "" || firstNum === 0)) {
        firstNum = 0
        display.textContent = firstNum + " +";
        operator = "+";
    } else {
        display.textContent = firstNum + " +";
        operator = "+";
    }
});
subtraction.addEventListener("click", () => {
    if (operator === "/" && firstNum !== "" && secondNum === 0) {
        display.textContent = "No dividing by zero!"; 
        console.log(`first num = ${firstNum}, secondNum = ${secondNum}, operator = ${operator}`)
        firstNum = "";
        secondNum = "";
        operator = "";
    } else if (operator !== "" && secondNum !== "") {
        firstNum = calculate(operator, firstNum, secondNum);
        secondNum = "";
        display.textContent = firstNum + " -";
        operator = "-";
    } else if (operator === "" && (firstNum === "" || firstNum === 0)) {
        display.textContent = "-";
        firstNum = "-";
    } else {
        display.textContent = firstNum + " -";
        operator = "-";
    }
});
multiplication.addEventListener("click", () => {
    if (operator === "/" && firstNum !== "" && secondNum === 0) {
        display.textContent = "No dividing by zero!"; 
        console.log(`first num = ${firstNum}, secondNum = ${secondNum}, operator = ${operator}`)
        firstNum = "";
        secondNum = "";
        operator = "";
    } else if (operator !== "" && secondNum !== "") {
        firstNum = calculate(operator, firstNum, secondNum);
        secondNum = "";
        display.textContent = firstNum + " x";
        operator = "x";
    } else if (operator === "" && (firstNum === "" || firstNum === 0)) {
        firstNum = 0
        display.textContent = firstNum + " x";
        operator = "x";
    } else {
        display.textContent = firstNum + " x";
        operator = "x";
    }
});
division.addEventListener("click", () => {
    if (operator === "/" && firstNum !== "" && secondNum === 0) {
        display.textContent = "No dividing by zero!"; 
        console.log(`first num = ${firstNum}, secondNum = ${secondNum}, operator = ${operator}`)
        firstNum = "";
        secondNum = "";
        operator = "";
    } else if (operator !== "" && secondNum !== "") {
        firstNum = calculate(operator, firstNum, secondNum);
        secondNum = "";
        display.textContent = firstNum + " /";
        operator = "/";
    } else if (operator === "" && (firstNum === "" || firstNum === 0)) {
        firstNum = 0
        display.textContent = firstNum + " /";
        operator = "/";
    } else {
        display.textContent = firstNum + " /";
        operator = "/";
    }
});

one.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "1";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "1";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
two.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "2";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "2";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
three.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "3";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "3";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
four.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "4";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "4";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
five.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "5";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "5";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
six.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "6";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "6";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
seven.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "7";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "7";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
eight.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "8";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "8";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
nine.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "9";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "9";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});
zero.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum + "0";
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + "0";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
});

decimal.addEventListener("click", () => {
    if (!operator) {
        if (firstNum.toString().split("").includes(".")) {
            return;
        } else {
        firstNum = firstNum + ".";
        display.textContent = firstNum;
        };
    } else {
        if (secondNum.toString().split("").includes(".")) {
            return;
        } else {
        secondNum = secondNum + ".";
        display.textContent = firstNum + ` ${operator} ` + secondNum;
        };
    }
    console.log(`firstNum after decimal button press ${firstNum}`)
    console.log(typeof firstNum)
})

equals.addEventListener("click", () => {
    if (operator === "/" && firstNum !== "" && secondNum === 0) {
        display.textContent = "No dividing by zero!"; 
        console.log(`first num = ${firstNum}, secondNum = ${secondNum}, operator = ${operator}`)
        firstNum = "";
        secondNum = "";
        operator = "";
    } else if (operator !== "" && firstNum !== "" && secondNum !== "") {
        const answer = Math.round((calculate(operator, firstNum, secondNum)) * 100) / 100;
        display.textContent = answer;
        firstNum = answer;
        secondNum = "";
        operator = ""
    } else if (operator !== "" && secondNum === "") {
        return;
    }
    console.log(`firstNum type: ${typeof firstNum}, firstNum value: ${firstNum}`);
    console.log(`secondNum type: ${typeof secondNum}, secondNum value: ${secondNum}`);
    console.log(`typeof operator = ${typeof operator}`);
    firstNum = "";
    secondNum = "";
    operator = "";
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

backButton.addEventListener("click", () => {
    if (secondNum.toString().length > 1) {
        secondNum = secondNum.toString().split("");
        secondNum.pop();
        secondNum = secondNum.join("");        
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    } else if (secondNum.toString().length === 1) {
        secondNum = "";
        display.textContent = firstNum + " " + operator;
    } else if (!secondNum && operator) {
        operator = "";
        display.textContent = firstNum;
    } else if (!secondNum && !operator && firstNum.toString().length > 1) {
        firstNum = firstNum.toString().split("");
        firstNum.pop();
        firstNum = firstNum.join("");        
        display.textContent = firstNum;
    } else if (!secondNum &&
        !operator &&
        firstNum.toString().length === 1) {
            display.textContent = "0";
            firstNum = "";
    } 
})

// To Do:

// EXTRA CREDIT:
// - add in decimal button (that is disabled if already used once in a number)
// - add backspace button
// - add keyboard support
