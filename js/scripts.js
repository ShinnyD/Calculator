const numInput = document.querySelector(".numInput");
const allButtons = document.querySelectorAll(".button");

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.dataset.value;
        if (value === "="){
           if (numInput.textContent.includes("/")){
            const splitNum = numInput.textContent.split("/");
            operate("/", splitNum [0], splitNum [1]);
           } 
        }
        
        if (value === "="){
            if (numInput.textContent.includes("*")) {
              const splitNum = numInput.textContent.split("*");
              operate("*", splitNum [0], splitNum [1]);
            }
        }
        
        if (value === "="){
            if (numInput.textContent.includes("+")) {
              const splitNum = numInput.textContent.split("+");
              operate("+", splitNum [0], splitNum [1]);
            }
        }

        if (value === "="){
            if (numInput.textContent.includes("-")) {
              const splitNum = numInput.textContent.split("-");
              operate("-", splitNum [0], splitNum [1]);
            } 
        }

        numInput.textContent += value
        console.log("e", e.target.dataset.value)

        if (value === "Clear"){
            numInput.textContent = ("");
        }
    })
})



const operate = (operater, value1, value2) => {
    const num1= Number(value1);
    const num2= Number(value2);

    if (operater === "/") {
        numInput.textContent=(num1 / num2);
        console.log(num1 / num2);
    }
    if (operater === "*") {
        numInput.textContent=(num1 * num2);
        console.log(num1 * num2);
    }
    if (operater === "-") {
        numInput.textContent=(num1 - num2);
        console.log(num1 - num2);
    }
    if (operater === "+") {
        numInput.textContent=(num1 + num2);
        console.log(num1 + num2);
    }
    console.log(operater,num1,num2)
    }
;
/*
//let firstNumber = parseInt(prompt("Please input the first number:"));
//let secondNumber = parseInt(prompt("Please input the second number:"));



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



/*
})*/