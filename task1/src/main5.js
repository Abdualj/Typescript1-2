// Implement the lengthOrSquare function
function lengthOrSquare(value) {
    // Use a type guard to check the actual type of 'value'
    if (typeof value === "string") {
        // if type is string, return the length of the string
        return value.length;
    }
    else {
        // if type is number return the square of the number
        return value * value;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var calculateBtn = document.getElementById("calculateBtn");
    var userInputEl = document.getElementById("userInput");
    var resultContainer = document.getElementById("resultContainer");
    var resultOutput = document.getElementById("resultOutput");
    if (!calculateBtn || !userInputEl || !resultContainer || !resultOutput) {
        console.error("One or more required DOM elements are missing.");
        return;
    }
    // Add event listener to the button
    calculateBtn.addEventListener("click", function () {
        var userInput = userInputEl.value.trim();
        if (!userInput) {
            resultOutput.innerHTML = "<span class=\"error\">Please enter a value</span>";
            resultContainer.style.display = "block";
            return;
        }
        // If userInput is numeric, convert it to number else keep it as string
        var parsedValue = !isNaN(parseFloat(userInput)) && isFinite(Number(userInput))
            ? parseFloat(userInput)
            : userInput;
        // Call the lengthOrSquare function
        var result = lengthOrSquare(parsedValue);
        // Display the result
        var inputType = typeof parsedValue;
        var inputValue = inputType === "string" ? "\"".concat(parsedValue, "\"") : parsedValue;
        var operationDesc = inputType === "string"
            ? "Length of \"".concat(parsedValue, "\" is ").concat(result)
            : "Square of ".concat(parsedValue, " is ").concat(result);
        resultOutput.innerHTML = "\n            <div class=\"result-detail\"><span class=\"detail-label\">Input Type:</span> ".concat(inputType, "</div>\n            <div class=\"result-detail\"><span class=\"detail-label\">Input Value:</span> ").concat(inputValue, "</div>\n            <div class=\"result-detail\"><span class=\"detail-label\">Result:</span> ").concat(operationDesc, "</div>\n        ");
        resultContainer.style.display = "block";
        // Also log to console
        console.log("Input Type: ".concat(inputType));
        console.log("Input Value: ".concat(inputValue));
        console.log("Result: ".concat(result));
        console.log("Result Type: ".concat(typeof result));
    });
});
