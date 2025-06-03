// Select all elements with the 'translate' class for parallax effect
const translate = document.querySelectorAll(".translate");
// Select main elements for animation and effects
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

// Get initial heights for calculations
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

// Add scroll event listener for parallax and animation effects
window.addEventListener('scroll', () => {
    // Get current scroll position
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    // Apply parallax effect to all elements with 'translate' class
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // Fade in elements with 'opacity' class based on scroll position
    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    // Fade out the big title as user scrolls
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    // Adjust shadow height based on scroll
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    // Move content and image container in opposite directions for parallax effect
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    // Animate border width based on scroll position
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})