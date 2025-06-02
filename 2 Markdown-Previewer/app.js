const textarea = document.getElementById('markdown-input');
const preview = document.getElementById('preview');

//  Load saved Markdown from localStorage on page load
const savedMarkdown = localStorage.getItem('markdown');
if (savedMarkdown !== null) {
  textarea.value = savedMarkdown;
  preview.innerHTML = marked(savedMarkdown);
} else {
  // Optional: initialize with a default value
  textarea.value = "# Welcome to Markdown Previewer!";
  preview.innerHTML = marked(textarea.value);
}

//  Update preview and localStorage as the user types
textarea.addEventListener('input', () => {
  const markdownText = textarea.value;
  preview.innerHTML = marked(markdownText);         
  localStorage.setItem('markdown', markdownText);   
});
