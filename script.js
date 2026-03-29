/**
 * ============================================================================
 * CV & Portfolio Website Script
 * This file handles all interactive elements of the website:
 * 1. Mobile Sidebar Navigation
 * 2. Portfolio Project Modal
 * 3. WhatsApp Contact Form Submission
 * 4. Back to Top Button Functionality
 * ============================================================================
 */


/* ==========================================================================
   1. Mobile Sidebar Navigation
   ========================================================================== */

// Select DOM elements for the sidebar
const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Opens the sidebar and displays the background overlay
 */
const openSidebar = () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
};

/**
 * Closes the sidebar and hides the background overlay
 */
const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

// Event Listeners for Sidebar
burgerMenu.addEventListener('click', openSidebar);          // Open via burger icon
closeBtn.addEventListener('click', closeSidebar);           // Close via 'X' button
overlay.addEventListener('click', closeSidebar);            // Close by clicking outside

// Automatically close the sidebar when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});


/* ==========================================================================
   2. Portfolio Project Modal
   ========================================================================== */

// Select DOM elements for the Modal
const portfolioModal = document.getElementById('portfolioModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');

/**
 * Closes the portfolio modal
 */
const closePortfolioModal = () => {
    portfolioModal.classList.remove('active');
};

// Event Listeners for Modal
closeModalBtn.addEventListener('click', closePortfolioModal);

// Close modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target === portfolioModal) {
        closePortfolioModal();
    }
});


/* ==========================================================================
   3. WhatsApp Contact Form Submission
   ========================================================================== */

/**
 * Handles form submission and redirects to WhatsApp with pre-filled message
 * @param {Event} e - Form submit event
 */
function sendWhatsApp(e) {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Retrieve input values securely
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Target WhatsApp Number
    const phoneNumber = "+6288744931419";  
    
    // Construct the WhatsApp message template (%0A represents a line break in URLs)
    const text = `Hello Happy!%0A%0A` + 
                 `My Name: ${encodeURIComponent(name)}%0A` + 
                 `Email: ${encodeURIComponent(email)}%0A` + 
                 `Message:%0A${encodeURIComponent(message)}`;
    
    // Final WhatsApp redirect URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // Open in a new tab to avoid losing current page progress
    window.open(whatsappUrl, '_blank');
}


/* ==========================================================================
   4. Back to Top Button Functionality
   ========================================================================== */

// Select Back to Top button
const backToTopBtn = document.getElementById('backToTop');

// Show the button only when the user has scrolled significantly down the page
window.addEventListener('scroll', () => {
    // 300 denotes pixels from the top of the scrollable document
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Smoothly scroll to top of the page when the button is clicked
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Ensures fluid scrolling animation
    });
});
