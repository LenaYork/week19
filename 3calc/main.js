class Calculator {
    static plus(a, b) {
        return +a + +b;
    }

    static minus(a, b) {
        return a - b;
    }

    static divide(a , b) {
        return a / b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

// console.log(Calculator.divide(10, 2));
const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const buttons = document.querySelector("#button-container");
const result = document.querySelector("#result");
buttons.addEventListener("click", function(event) {
    const clickedButton = event.target.getAttribute("id");

    switch(clickedButton) {
        case "plusButton":
            result.innerHTML = Calculator.plus(num1.value, num2.value);
            break;

        case "minusButton":
            result.innerHTML = Calculator.minus(num1.value, num2.value);
            break;

        case "multiplyButton":
            result.innerHTML = Calculator.multiply(num1.value, num2.value);
            break;

        case "divideButton":
            result.innerHTML = Calculator.divide(num1.value, num2.value);
            break;
        
        default:
            break;

    }
});