function toggleMenu() {
    const nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

// document.querySelectorAll('.toggle-arrow').forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         const content = arrow.nextElementSibling; // Get the next sibling (additional content)
//         content.style.display = content.style.display === 'block' ? 'none' : 'block';

//         // Rotate the arrow 180 degrees when clicked
//         arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    // Get all toggle arrows
    const toggleArrows = document.querySelectorAll('.toggle-arrow');

    // Iterate over each arrow to add the click event listener
    toggleArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            // Toggle rotation of the arrow
            this.classList.toggle('rotate');

            // Get the section related to this arrow
            const section = this.parentElement.nextElementSibling;

            // Toggle visibility of the additional content
            section.classList.toggle('active');
        });
    });
});
