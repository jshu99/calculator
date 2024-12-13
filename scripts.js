var display = document.getElementById("display")
var numBtn = document.querySelectorAll("#numericBtn")
var clearBtn = document.getElementById("clearBtn")
var addBtn = document.getElementById("add")
var minusBtn = document.getElementById("subtract")
var resultBtn = document.getElementById("result")

let numbers = []; //stores individual digits from calculator input
let addend = null; //array that stores whole numbers joined together from numbers
let operator = null;


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    result = num1 - num2
}

function multiply(num1, num2){
    result = num1 * num2
}

function divide(num1, num2){
    result = num1 / num2
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
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return num2; // Default behavior when no operator is set
    }
}


addBtn.addEventListener("click", function () {
    if (numbers.length > 0) {
        const currentNumber = Number(numbers.join(""));
            console.log(`numbers[]: ${currentNumber}`);
        if (addend === null){
            addend = currentNumber
        }else if (operator){
            addend = operate(addend, operator, currentNumber)
        }
        console.log(`addend after addition: ${addend}`);
        display.innerHTML = addend;
        numbers = [];
        operator = '+'
    }
});


minusBtn.addEventListener("click", function(){
    if (numbers.length > 0){
        const currentNumber = Number(numbers.join(""))
        console.log(`numbers[]: ${currentNumber}`);
        if (operator === '+') {
            addend.push(currentNumber);
            const sum = addend.reduce((a, b) => a + b, 0)
            display.innerHTML = sum;
            addend.splice(0, addend.length, sum);
        }
        operator = '-'
        const sum = addend[0] - currentNumber;
        console.log(`sum: ${sum}`);
        display.innerHTML = sum
        addend.splice(0, addend.length, sum);
        numbers = []
    }
})




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



// resultBtn.addEventListener("click", function(){
//     display.innerHTML = sum;
// })


function clearDisplay() {
    let displayElement = document.getElementById("display"); // Fetch the element inside the function
    displayElement.innerHTML = ""; // Clear the content
    numbers = [];
    addend = [];
}
