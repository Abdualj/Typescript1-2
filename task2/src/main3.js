// Create an exam result object
var examResult = {
    name: "Alice",
    scores: [["Math", 85], ["Science", 92], ["History", 78]],
    totalScore: 255
};
// Function to calculate and display average score
function displayAverageScore(result) {
    var totalSubjects = result.scores.length;
    var averageScore = result.totalScore / totalSubjects;
    var container = document.getElementById("resultContainer");
    if (!container)
        return;
    container.innerHTML = "<strong>Average Score for ".concat(result.name, ":</strong> ").concat(averageScore.toFixed(2));
    container.style.display = "block";
    console.log("Average Score for ".concat(result.name, ": ").concat(averageScore.toFixed(2)));
}
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    var showBtn = document.getElementById("showAverageBtn");
    if (!showBtn)
        return;
    showBtn.addEventListener("click", function () {
        displayAverageScore(examResult);
    });
});
