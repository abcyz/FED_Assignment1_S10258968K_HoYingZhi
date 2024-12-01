document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const images = [
        'images/Product1.jpg',
        'images/Info-1.jpg',
        'images/Info-2.jpg',
        'images/Info-3.jpg'
    ];

    let currentImageIndex = 0;

    function changeImage(index) {
        currentImageIndex = index;
        mainImage.src = images[currentImageIndex];
        updateThumbnailActive();
    }

    function updateThumbnailActive() {
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
        updateThumbnailActive();
    }

    function previousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentImageIndex];
        updateThumbnailActive();
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => changeImage(index));
    });

    leftArrow.addEventListener('click', previousImage);
    rightArrow.addEventListener('click', nextImage);
});


function goToProductPage(productId) {
    window.location.href = 'cart.html?id=' + productId;
}