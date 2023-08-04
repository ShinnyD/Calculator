const numInput = document.querySelector(".numInput");
const allButtons = document.querySelectorAll(".button");

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.dataset.value;
        numInput.textContent = value
        console.log("e", e.target.dataset.value)
    })
})
/*
//let firstNumber = parseInt(prompt("Please input the first number:"));
//let secondNumber = parseInt(prompt("Please input the second number:"));

let operator = ["+", "-", "*", "/"];

const addition = ((firstNumber, secondNumber) => {
    let addValues = (firstNumber + secondNumber);
    console.log("add", addValues);
});

const subtraction = ((firstNumber, secondNumber) => {
    let subtractValues = (firstNumber - secondNumber);
    console.log("subtract", subtractValues);
}); 

const multiplication = ((firstNumber, secondNumber) => {
    let multiplyValues = (firstNumber * secondNumber);
    console.log("multiply", multiplyValues);
});

const division = ((firstNumber, secondNumber) => {
    let divideValules = (firstNumber / secondNumber);
    console.log("divide", divideValules);
});

addition(firstNumber, secondNumber);
subtraction(firstNumber, secondNumber);
multiplication(firstNumber, secondNumber);
division(firstNumber, secondNumber);



/*const operate = ((firstNumber, secondNumber)=> {
    if (operator === "+"){
        return firstNumber + secondNumber;
        console.log(operate);
    }
})*/