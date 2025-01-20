document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Background Image Rotation
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const heroSection = document.querySelector('.hero');
    let index = 0;

    if (heroSection) {
        setInterval(() => {
            heroSection.style.backgroundImage = `url(${images[index]})`;
            index = (index + 1) % images.length;
        }, 10000); // Change every 10 seconds
    }
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const headerRight = document.querySelector('.header-right');

    if (menuToggle && headerRight) {
        menuToggle.addEventListener('click', () => {
            headerRight.classList.toggle('show');
        });
    }

    // Highlight Active Navigation Link
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".header-right a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();
        if (linkHref === currentPage) {
            link.classList.add("active"); // Add the active class
        } else {
            link.classList.remove("active"); // Remove from others
        }
    });

    console.log("Current page path:", window.location.pathname); // Log current page path for debugging
});

document.addEventListener("DOMContentLoaded", () => {
    // Get the current page's filename (e.g., "index.html")
    const currentPage = window.location.pathname.split("/").pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll(".header-right a");

    // Loop through links to find and highlight the current page
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop(); // Extract the filename
        if (linkHref === currentPage) {
            link.classList.add("active"); // Add the active class
        } else {
            link.classList.remove("active"); // Ensure others are not active
        }
    });
});
