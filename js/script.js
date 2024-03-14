function showAlert() {
    alert("Hello, World!");
}

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
}

function showStyledAlert() {
    document.getElementById('styledAlert').style.display = "block";
}

function closeStyledAlert() {
    document.getElementById('styledAlert').style.display = "none";
}
