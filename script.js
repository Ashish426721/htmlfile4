const calcDisplay = document.querySelector(".calc-display");
const calcButtons = document.querySelectorAll("button");
const operators = ["%", "*", "/", "-", "+", "="];
let currentInput = "";

// Function to perform calculations based on button clicks
const handleCalculation = (value) => {
    calcDisplay.focus();
    if (value === "=" && currentInput !== "") {
        try {
            currentInput = eval(currentInput.replace("%", "/100"));
        } catch {
            currentInput = "Error";
        }
    } else if (value === "AC") {
        currentInput = "";
    } else if (value === "DEL") {
        currentInput = currentInput.toString().slice(0, -1);
    } else {
        if (currentInput === "" && operators.includes(value)) return;
        currentInput += value;
    }
    calcDisplay.value = currentInput;
};

// Adding event listeners to buttons to trigger calculations
calcButtons.forEach((button) => {
    button.addEventListener("click", (e) => handleCalculation(e.target.dataset.value));
});
