// =========================
// FAQ ACCORDION
// =========================

const faqButtons = document.querySelectorAll(".faq button");

faqButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const faq = button.parentElement;

        faq.classList.toggle("active");

        const icon = button.querySelector("span");

        if (faq.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }

    });

});


// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}