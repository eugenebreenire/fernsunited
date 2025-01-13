document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".navbar ul");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active"); // Show/hide the menu
    });
});
