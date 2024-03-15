// Function to show a simple alert with "Hello, World!"
function showAlert() {
    alert("Hello, World!");
}

// Function to toggle the visibility of the navigation menu
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
}

// Function to show a styled alert container
function showStyledAlert() {
    document.getElementById('styledAlert').style.display = "block";
}

// Function to close the styled alert container
function closeStyledAlert() {
    document.getElementById('styledAlert').style.display = "none";
}
