// Define the interface for ExamResult
interface ExamResult {
  name: string;
  scores: [string, number][]; // tuple array: [subject, score]
  totalScore: number;
}

// Create an exam result object
const examResult: ExamResult = {
  name: "Alice",
  scores: [["Math", 85], ["Science", 92], ["History", 78]],
  totalScore: 255
};

// Function to calculate and display average score
function displayAverageScore(result: ExamResult): void {
  const totalSubjects = result.scores.length;
  const averageScore = result.totalScore / totalSubjects;

  const container = document.getElementById("resultContainer");
  if (!container) return;

  container.innerHTML = `<strong>Average Score for ${result.name}:</strong> ${averageScore.toFixed(2)}`;
  container.style.display = "block";

  console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("showAverageBtn") as HTMLButtonElement | null;
  if (!showBtn) return;

  showBtn.addEventListener("click", () => {
    displayAverageScore(examResult);
  });
});

