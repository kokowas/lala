// This new script waits for the page to load, then adds listeners
// for BOTH click (for desktop) and touchstart (for mobile).

document.addEventListener('DOMContentLoaded', function() {

    const accordionButtons = document.getElementsByClassName("accordion-button");

    // The function that will open/close the accordion
    const toggleAccordion = function(event) {
        // This is important: it prevents the browser from also firing a "click"
        // event after a touch, which would cause a double-toggle.
        event.preventDefault();

        // 'this' refers to the button that was clicked or touched
        this.classList.toggle("active");
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            // Set the height to its actual scroll height to make it visible
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };

    // Loop through all the buttons and attach the event listeners
    for (let i = 0; i < accordionButtons.length; i++) {
        const button = accordionButtons[i];
        
        // Attach the same function to both events
        button.addEventListener('click', toggleAccordion);
        button.addEventListener('touchstart', toggleAccordion);
    }

});
