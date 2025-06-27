/* script.js */

// This waits for the HTML content to be fully loaded before running the script.
// It's a best practice that makes the code more reliable.
document.addEventListener('DOMContentLoaded', function() {

    const acc = document.getElementsByClassName("accordion-button");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});