// Define the BlogPost interface
interface BlogPost {
  title: string;
  content: string;
  tags: string[]; // array of tags
}

// Create a blog post object
const blogPost: BlogPost = {
  title: "Getting Started with TypeScript",
  content: "Learn the basics of TypeScript and its powerful features.",
  tags: ["TypeScript", "Programming", "Web Development"]
};

// Function to display tags of a blog post in the DOM
function displayTags(post: BlogPost): void {
  const container = document.getElementById("tagsContainer");
  if (!container) return;

  container.innerHTML = `<strong>Tags:</strong> ${post.tags.join(", ")}`;
  container.style.display = "block";

  // Also log to console
  console.log(`Tags: ${post.tags.join(", ")}`);
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const showTagsBtn = document.getElementById("showTagsBtn") as HTMLButtonElement | null;
  if (!showTagsBtn) return;

  showTagsBtn.addEventListener("click", () => {
    displayTags(blogPost);
  });
});
