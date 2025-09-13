// Create a blog post object
var blogPost = {
    title: "Getting Started with TypeScript",
    content: "Learn the basics of TypeScript and its powerful features.",
    tags: ["TypeScript", "Programming", "Web Development"]
};
// Function to display tags of a blog post in the DOM
function displayTags(post) {
    var container = document.getElementById("tagsContainer");
    if (!container)
        return;
    container.innerHTML = "<strong>Tags:</strong> ".concat(post.tags.join(", "));
    container.style.display = "block";
    // Also log to console
    console.log("Tags: ".concat(post.tags.join(", ")));
}
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    var showTagsBtn = document.getElementById("showTagsBtn");
    if (!showTagsBtn)
        return;
    showTagsBtn.addEventListener("click", function () {
        displayTags(blogPost);
    });
});
