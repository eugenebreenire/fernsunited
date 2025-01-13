document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.navbar ul.mobile');  // Ensure this matches the HTML class

    // Check if both elements exist before adding the event listener
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');  // Toggle the mobile menu visibility
        });

        // Optional: Add close button functionality
        const closeButton = document.querySelector('.close-btn');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                mobileMenu.classList.remove('active');  // Close the menu when the close button is clicked
            });
        }
    } else {
        console.error("Hamburger button or mobile menu not found!");
    }
});
