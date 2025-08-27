let firstNum = "";
let secondNum = "";
let operator = "";

function calculate(operator, firstNum, secondNum) {
    console.log(operator);
    let answer = 0;
    if (operator === "+") {
        answer = firstNum + secondNum;
    } else if (operator === "-") {
        answer = firstNum - secondNum;   
    } else if (operator === "x") {
        answer = firstNum * secondNum;
    } else if (operator === "/") {
        answer = firstNum / secondNum;
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

addition.addEventListener("click", () => clickOperator("+"));
subtraction.addEventListener("click", () => clickOperator("-"));
multiplication.addEventListener("click", () => clickOperator("x"));
division.addEventListener("click", () => clickOperator("/"));

function clickOperator(sign) {
    if (operator === "/" && firstNum !== "" && secondNum === 0) {
        display.textContent = "No dividing by zero!"; 
        console.log(`first num = ${firstNum}, secondNum = ${secondNum}, operator = ${operator}`)
        firstNum = "";
        secondNum = "";
        operator = "";
    } else if (operator !== "" && secondNum !== "") {
        firstNum = calculate(operator, firstNum, secondNum);
        secondNum = "";
        display.textContent = firstNum + ` ${sign}`;
        operator = `${sign}`;
    } else if (sign === "-" && operator === "" && 
        (firstNum === "" || firstNum === 0)) {
            firstNum = `${sign}`;
            display.textContent = `${sign}`;
    } else if (operator === "" && (firstNum === "" || firstNum === 0)) {
        firstNum = 0
        display.textContent = firstNum + ` ${sign}`;
        operator = `${sign}`;
    } else {
        display.textContent = firstNum + ` ${sign}`;
        operator = `${sign}`;
    };
};

one.addEventListener("click", () => clickNumber(1));
two.addEventListener("click", () => clickNumber(2));
three.addEventListener("click", () => clickNumber(3));
four.addEventListener("click", () => clickNumber(4));
five.addEventListener("click", () => clickNumber(5));
six.addEventListener("click", () => clickNumber(6));
seven.addEventListener("click", () => clickNumber(7));
eight.addEventListener("click", () => clickNumber(8));
nine.addEventListener("click", () => clickNumber(9));
zero.addEventListener("click", () => clickNumber(0));

function clickNumber(num) {
        if (operator === "") {
        firstNum = firstNum + `${num}`;
        display.textContent = firstNum;
    } else {
        secondNum = secondNum + `${num}`;
        display.textContent = firstNum + ` ${operator} ` + secondNum;
    }
}

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
    firstNum = "";
    secondNum = "";
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
// - add keyboard support
//  - Maybe change the display to an input so you can enter text
//  - Then filter to only allow numbers, the decimal, and the operators to input
//      - Maybe I can have addeventlistener for keypress on the numbers/operators, then target which key was hit and take the value from target.key or whatever?
//  - create functions for enter (return), backspace (delete), clear (?)
//      - just use the same functions that you have for the buttons, but move those to independent functions and use callbacks in the eventlisteners
//  - Will I have to copy/paste the code from current events to the new ones, or is there a way to integrate?
//  - Maybe I have to add or remove from the value of the input on a button click? Like what I did for the .textcontent?
