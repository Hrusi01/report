// JavaScript for image rotation on mouse hover based on mouse position
const images = document.querySelectorAll('.rotatable-image');

images.forEach(image => {
    image.addEventListener('mousemove', (event) => {
        const rect = image.getBoundingClientRect();
        const imageCenterX = rect.left + rect.width / 2;
        const mouseX = event.clientX;

        const rotationAmount = (mouseX - imageCenterX) / (rect.width / 2) * 10;

        // Apply rotation based on mouse position
        image.style.transform = `rotate(${rotationAmount}deg)`;
    });

    // Reset rotation when mouse leaves the image
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotate(0deg)';
    });
});
