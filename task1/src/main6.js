var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Create a generic function that reverses the elements of an array
function reverseArray(array) {
    // Create a copy of the array to avoid mutating the original
    var reversed = __spreadArray([], array, true);
    return reversed.reverse();
}
// Test arrays
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["apple", "banana", "cherry", "date"];
var mixedArray = [true, 42, "hello", false];
// Function to format array for display with color coding
function formatArray(array) {
    return array
        .map(function (item) {
        if (typeof item === "string") {
            return "<span class=\"string\">\"".concat(item, "\"</span>");
        }
        else if (typeof item === "number") {
            return "<span class=\"number\">".concat(item, "</span>");
        }
        else if (typeof item === "boolean") {
            return "<span class=\"boolean\">".concat(item, "</span>");
        }
        return String(item);
    })
        .join(", ");
}
// Function to display array
function displayArray(containerId, array) {
    var container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "[".concat(formatArray(array), "]");
    }
}
// Function to reverse and display a specific array
function reverseAndDisplay(originalArray, resultContainerId) {
    var reversedArray = reverseArray(originalArray);
    displayArray(resultContainerId, reversedArray);
    // Also log to console
    console.log("Reversed Array:", reversedArray);
}
// Wait for DOM before binding
document.addEventListener("DOMContentLoaded", function () {
    var reverseNumbersBtn = document.getElementById("reverseNumbers");
    var reverseStringsBtn = document.getElementById("reverseStrings");
    var reverseMixedBtn = document.getElementById("reverseMixed");
    var reverseAllBtn = document.getElementById("reverseAll");
    if (reverseNumbersBtn) {
        reverseNumbersBtn.addEventListener("click", function () {
            reverseAndDisplay(numberArray, "reversedNumbers");
        });
    }
    if (reverseStringsBtn) {
        reverseStringsBtn.addEventListener("click", function () {
            reverseAndDisplay(stringArray, "reversedStrings");
        });
    }
    if (reverseMixedBtn) {
        reverseMixedBtn.addEventListener("click", function () {
            reverseAndDisplay(mixedArray, "reversedMixed");
        });
    }
    if (reverseAllBtn) {
        reverseAllBtn.addEventListener("click", function () {
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
