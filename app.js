console.log("app.js loaded");

function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    if (answer.classList.contains("active")) {
        answer.classList.remove("active");

        if (icon) {
            icon.classList.remove("open");
        }
    } else {

        document.querySelectorAll(".faq-answer").forEach(item => {
            item.classList.remove("active");
        });

        document.querySelectorAll(".faq-icon").forEach(item => {
            item.classList.remove("open");
        });

        answer.classList.add("active");

        if (icon) {
            icon.classList.add("open");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }
});