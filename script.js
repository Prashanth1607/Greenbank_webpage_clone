
$(document).ready(function() {
    $('.partner-logos img').animate({
        left: '0%'
    }, 1000); // 1000ms = 1s
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function () {
            const answer = item.querySelector(".faq-answer");

            // Toggle display of the answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                question.classList.remove("open");
            } else {
                answer.style.display = "block";
                question.classList.add("open");
            }
        });
    });
});
