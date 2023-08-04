const addition = ((a, b) => {
    console.log(3 + 5);
})

const subtraction = ((a, b) => {
    return (3 - 5);
}) 

const multiplication = ((a, b) => {
    return (3 * 5);
})

const division = ((a, b) => {
    return (15 / 3);
})

let firstNumber = Number("5");
let secondNumber = Number("3");
let operator = {add:"+", subtract: "-", multiply: "*", divide: "/"};

const operate = ((firstNumber, secondNumber)=> {
    if (operator === "+"){
        return firstNumber + secondNumber;
        console.log(firstNumber + secondNumber);
    }
})