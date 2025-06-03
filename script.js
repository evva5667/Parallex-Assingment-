// Select all elements with the 'translate' class for parallax effect
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelectorAll(".content");
const sections = document.querySelectorAll("section");
const image_containers = document.querySelectorAll(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const borders = document.querySelectorAll(".border");

// Get initial heights for calculations
let header_height = header.offsetHeight;
let section_heights = Array.from(sections).map(section => section.offsetHeight);

// Add scroll event listener for parallax and animation effects
window.addEventListener('scroll', () => {
    // Get current scroll position
    let scroll = window.pageYOffset;
    
    // Apply parallax effect to all elements with 'translate' class
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // Handle animations for each section
    sections.forEach((section, index) => {
        let sectionY = section.getBoundingClientRect();
        let sectionHeight = section_heights[index];
        
        // Fade in elements with 'opacity' class based on scroll position
        opacity.forEach(element => {
            if (element.closest('section') === section) {
                element.style.opacity = scroll / (sectionY.top + sectionHeight);
            }
        });

        // Animate content and images
        if (content[index]) {
            content[index].style.transform = `translateY(${scroll / (sectionHeight + sectionY.top) * 50 - 50}px)`;
        }
        if (image_containers[index]) {
            image_containers[index].style.transform = `translateY(${scroll / (sectionHeight + sectionY.top) * -50 + 50}px)`;
        }
        if (borders[index]) {
            borders[index].style.width = `${scroll / (sectionY.top + sectionHeight) * 30}%`;
        }
    });

    // Fade out the big title as user scrolls
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    
    // Adjust shadow height based on scroll
    shadow.style.height = `${scroll * 0.5 + 300}px`;
}); 