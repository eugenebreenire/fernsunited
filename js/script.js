document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.navbar ul.mobile');  // Ensure this matches the HTML class
    

    // Check if both elements exist before adding the event listener
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active')
            mobileMenu.classList.toggle('active');  // Toggle the mobile menu visibility
        });

        window.addEventListener('scroll', function() {
            // Select the icons you want to change opacity for
            let fernsIcon = document.querySelector('.logo');
            let navIcon = document.querySelector('.logoNav'); // Make sure to include the dot (.) for class selector

            // Listen for the scroll event
            window.addEventListener('scroll', function() {
                // Get the current scroll position
                let scrollPosition = window.scrollY;

                // Calculate opacity for the fernsIcon (adjust opacity as you scroll)
                let opacityValue = 1 - (scrollPosition / 150); 
                opacityValue = Math.max(0, Math.min(1, opacityValue)); // Ensure opacity stays between 0 and 1
                fernsIcon.style.opacity = opacityValue;

                   // Calculate opacity based on scroll position (0 to 1 as you scroll from 0 to 300px)
                    let navOpacityValue = 0 + (scrollPosition / 300);
                    navOpacityValue = Math.min(navOpacityValue, 1); // Ensure opacity doesn't exceed 1

                    // Apply opacity to the navIcon
                    navIcon.style.opacity = navOpacityValue; 
            });
        })

        // Optional: Add close button functionality
        const closeButton = document.querySelector('.close-btn');
       /* if (closeButton) {
            closeButton.addEventListener('click', function() {
                mobileMenu.classList.remove('active');  // Close the menu when the close button is clicked
            });
        } */ 
    } else {
        console.error("Hamburger button or mobile menu not found!");
    }

    // Get the modal and close button elements
    const modal = document.querySelector('.gallery-modal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.querySelector('.modal-image');

    // Get all gallery tiles and set up a click event
    const galleryTiles = document.querySelectorAll('.gallery-tile');
    modal.style.display = 'none';

    galleryTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;  // Get image source from clicked tile
            modalImage.src = imgSrc;  // Set the modal image source to the clicked image
            modal.style.display = 'flex';  // Show the modal
            modalImage.style.display = 'flex';  // Show the modal
        });
    });

    // Close the modal when the user clicks the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';  // Hide the modal
        modalImage.style.display = 'none'
    });
});
