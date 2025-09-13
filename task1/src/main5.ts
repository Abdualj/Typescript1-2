// Implement the lengthOrSquare function
function lengthOrSquare(value: string | number): number {
    // Use a type guard to check the actual type of 'value'
    if (typeof value === "string") {
        // if type is string, return the length of the string
        return value.length;
    } else {
        // if type is number return the square of the number
        return value * value;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement | null;
    const userInputEl = document.getElementById("userInput") as HTMLInputElement | null;
    const resultContainer = document.getElementById("resultContainer") as HTMLElement | null;
    const resultOutput = document.getElementById("resultOutput") as HTMLElement | null;

    if (!calculateBtn || !userInputEl || !resultContainer || !resultOutput) {
        console.error("One or more required DOM elements are missing.");
        return;
    }

    // Add event listener to the button
    calculateBtn.addEventListener("click", () => {
        const userInput: string = userInputEl.value.trim();

        if (!userInput) {
            resultOutput.innerHTML = `<span class="error">Please enter a value</span>`;
            resultContainer.style.display = "block";
            return;
        }

        // If userInput is numeric, convert it to number else keep it as string
        const parsedValue: string | number =
            !isNaN(parseFloat(userInput)) && isFinite(Number(userInput))
                ? parseFloat(userInput)
                : userInput;

        // Call the lengthOrSquare function
        const result = lengthOrSquare(parsedValue);

        // Display the result
        const inputType = typeof parsedValue;
        const inputValue = inputType === "string" ? `"${parsedValue}"` : parsedValue;

        const operationDesc =
            inputType === "string"
                ? `Length of "${parsedValue}" is ${result}`
                : `Square of ${parsedValue} is ${result}`;

        resultOutput.innerHTML = `
            <div class="result-detail"><span class="detail-label">Input Type:</span> ${inputType}</div>
            <div class="result-detail"><span class="detail-label">Input Value:</span> ${inputValue}</div>
            <div class="result-detail"><span class="detail-label">Result:</span> ${operationDesc}</div>
        `;

        resultContainer.style.display = "block";

        // Also log to console
        console.log(`Input Type: ${inputType}`);
        console.log(`Input Value: ${inputValue}`);
        console.log(`Result: ${result}`);
        console.log(`Result Type: ${typeof result}`);
    });
});
