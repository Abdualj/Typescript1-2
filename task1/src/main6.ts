// Create a generic function that reverses the elements of an array
function reverseArray<T>(array: T[]): T[] {
    // Create a copy of the array to avoid mutating the original
    const reversed = [...array];
    return reversed.reverse();
}

// Test arrays
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

// Function to format array for display with color coding
function formatArray(array: (string | number | boolean)[]): string {
    return array
        .map(item => {
            if (typeof item === "string") {
                return `<span class="string">"${item}"</span>`;
            } else if (typeof item === "number") {
                return `<span class="number">${item}</span>`;
            } else if (typeof item === "boolean") {
                return `<span class="boolean">${item}</span>`;
            }
            return String(item);
        })
        .join(", ");
}

// Function to display array
function displayArray(containerId: string, array: (string | number | boolean)[]): void {
    const container = document.getElementById(containerId) as HTMLElement | null;
    if (container) {
        container.innerHTML = `[${formatArray(array)}]`;
    }
}

// Function to reverse and display a specific array
function reverseAndDisplay<T extends string | number | boolean>(
    originalArray: T[],
    resultContainerId: string
): void {
    const reversedArray = reverseArray(originalArray);
    displayArray(resultContainerId, reversedArray);

    // Also log to console
    console.log("Reversed Array:", reversedArray);
}

// Wait for DOM before binding
document.addEventListener("DOMContentLoaded", () => {
    const reverseNumbersBtn = document.getElementById("reverseNumbers") as HTMLButtonElement | null;
    const reverseStringsBtn = document.getElementById("reverseStrings") as HTMLButtonElement | null;
    const reverseMixedBtn = document.getElementById("reverseMixed") as HTMLButtonElement | null;
    const reverseAllBtn = document.getElementById("reverseAll") as HTMLButtonElement | null;

    if (reverseNumbersBtn) {
        reverseNumbersBtn.addEventListener("click", () => {
            reverseAndDisplay(numberArray, "reversedNumbers");
        });
    }

    if (reverseStringsBtn) {
        reverseStringsBtn.addEventListener("click", () => {
            reverseAndDisplay(stringArray, "reversedStrings");
        });
    }

    if (reverseMixedBtn) {
        reverseMixedBtn.addEventListener("click", () => {
            reverseAndDisplay(mixedArray, "reversedMixed");
        });
    }

    if (reverseAllBtn) {
        reverseAllBtn.addEventListener("click", () => {
            reverseAndDisplay(numberArray, "reversedNumbers");
            reverseAndDisplay(stringArray, "reversedStrings");
            reverseAndDisplay(mixedArray, "reversedMixed");
        });
    }

    // Initial display of original arrays
    displayArray("originalNumbers", numberArray);
    displayArray("originalStrings", stringArray);
    displayArray("originalMixed", mixedArray);
});
