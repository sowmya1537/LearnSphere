// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================= FAQ =================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const symbol = question.querySelector("span");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove("active");

            const otherSymbol =
                otherItem.querySelector(".faq-question span");

            otherSymbol.textContent = "+";
        });

        // Open clicked item
        if (!isActive) {
            item.classList.add("active");
            symbol.textContent = "−";
        }

    });

});


// ================= FOOTER YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            const headerHeight =
                document.querySelector("header").offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }

    });

});