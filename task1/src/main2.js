// Implementation of the squareRoot function
function squareRoot(num) {
    // Check if the input is undefined or null
    if (num === undefined || num === null) {
        return 'Input is undefined or null.';
    }
    // Check if the input is a valid number
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Invalid input. Please enter a valid number.';
    }
    // Handle cases where the input is negative
    if (num < 0) {
        return 'Cannot calculate square root of a negative number.';
    }
    // Calculate the square root and return the result
    var sqrt = Math.sqrt(num);
    return sqrt;
}
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    var calculateBtn = document.getElementById('calculateBtn');
    var numberInputEl = document.getElementById('numberInput');
    var resultOutput = document.getElementById('resultOutput');
    if (!calculateBtn || !numberInputEl || !resultOutput) {
        console.error("Required DOM elements not found.");
        return;
    }
    // Add event listener to the button
    calculateBtn.addEventListener('click', function () {
        var userInput = numberInputEl.value;
        // Convert user input to a number or keep it undefined if empty
        var numberInput = userInput ? parseFloat(userInput) : undefined;
        // Call the squareRoot function and display the result
        var result = squareRoot(numberInput);
        // Display the result
        if (typeof result === 'string') {
            resultOutput.innerHTML = "<span class=\"error\">".concat(result, "</span>");
        }
        else {
            resultOutput.innerHTML = "<span class=\"success\">Square root of ".concat(userInput, " is ").concat(result.toFixed(6), "</span>");
        }
    });
});
