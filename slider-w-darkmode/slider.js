function toggleDarkMode() {

  var checkbox = document.querySelector('input[type="checkbox"]');
  var body = document.body;

  // Check if the checkbox is checked
  if (checkbox.checked) {
    // If checked, set dark mode class
    body.classList.add('dark-mode');
  } else {
    // If unchecked, remove dark mode class
    body.classList.remove('dark-mode');
  }
}

// Runs code when the window has finished loading
window.onload = function() {
}