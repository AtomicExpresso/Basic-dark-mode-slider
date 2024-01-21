function toggleDarkMode() {

  var checkbox = document.querySelector('input[type="checkbox"]');
  var body = document.body;

  // Check if the checkbox is checked
  if (checkbox.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

window.onload = function() {
}
