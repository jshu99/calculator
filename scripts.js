var display = document.querySelector("p")
var numBtn = document.querySelectorAll("#numericBtn")
var clearBtn = document.getElementById("clearBtn")
var addBtn = document.querySelector("#add")
var minusBtn = document.getElementById("subtract")
var multiplyBtn = document.getElementById("multiply")
var divideBtn = document.getElementById("divide")
var resultBtn = document.getElementById("result")

let numbers = []; //stores individual digits from calculator input
let addend = null; //array that stores whole numbers joined together from numbers
let operator = null;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}


function input(event) {
    let digit = event.target.innerText;
    numbers.push(digit);
    display.innerHTML = numbers.join("");
}

numBtn.forEach(button => {
    button.addEventListener("click", input);
});

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return result = add(num1, num2);
        case '-':
            return result = subtract(num1, num2);
        case '*':
            return result = multiply(num1, num2);
        case '/':
            return result = divide(num1, num2);
        default:
            return result; // Default behavior when no operator is set
    }
}

addBtn.addEventListener("click", function () {
    if (numbers.length > 0) { //check if numbers array contains something
        const currentNumber = Number(numbers.join("")); 
            console.log(`numbers[]: ${currentNumber}`);
        if (addend === null){ //
            addend = currentNumber
        }else if (operator){
            addend = operate(addend, operator, currentNumber)
        }
        console.log(`addend after ${operator} ${addend}`);
        display.innerHTML = addend;
        numbers = [];
        operator = '+'
    }
});

minusBtn.addEventListener("click", function(){
    if (numbers.length > 0){
        const currentNumber = Number(numbers.join(""))
        console.log(`numbers[]: ${currentNumber}`);
        if (addend === null) {
            addend = currentNumber
        }else if (operator){
            addend = operate(addend, operator, currentNumber)
        }
        console.log(`addend after ${operator} ${addend}`);
        display.innerHTML = addend
        numbers = []
        operator = '-'
    }
})


multiplyBtn.addEventListener("click", function(){
    alert()
})


divideBtn.addEventListener("click", function(){
    alert()
})



resultBtn.addEventListener("click", generateResult)


function generateResult(){
    if (numbers.length > 0){
        const currentNumber = Number(numbers.join(""))
        console.log(`numbers[]: ${currentNumber}`);
        if (addend === null) {
            addend = currentNumber
        } else if (operator){
            addend = operate(addend, operator, currentNumber)
        }
        console.log(`addend after ${operator} ${addend}`)
        display.innerHTML = addend
        operator = null;
    }
}

function clearDisplay() {
    display.innerHTML = ""; // Clear the content
    numbers = [];
    addend = [];
}


// function operationHandler(operation){
//     if (numbers.length > 0){
//             console.log(numbers)
//         numbers = Number(numbers.join(""))
//             console.log(numbers)
//         addend.push(numbers)
//             console.log(addend)
//         numbers = [];
        
//         switch(operation){
//             case 'add':{
//                 sum = addend.reduce((a, b) => a + b, 0);
//             }
//             case 'subtract':{
//                 sum = addend.reduce((a, b) => a - b);
//             }
//         }
//         display.innerHTML = sum;
//         console.log(sum);
//     }
// }

// minusBtn.addEventListener("click", function(){
//     if (numbers.length > 0){
//         console.log(numbers)
//     numbers = Number(numbers.join(""))
//         console.log(numbers)
//     addend.push(numbers)
//         console.log(addend)
//     numbers = [];
//     sum = addend.reduce(subtract)
//     display.innerHTML = sum
//         console.log(sum)
// }
// })



// addBtn.addEventListener("click", function() {
//     operationHandler("add");
// });

// minusBtn.addEventListener("click", function() {
//     operationHandler("subtract");
// });





