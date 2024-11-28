let currentImageIndex = 0;
const images = [
    "images/product1.jpg",
    "images/product2.jpg",
    "images/product3.jpg",
    "images/product4.jpg"
];

function changeImage(index) {
    currentImageIndex = index;
    document.getElementById("mainImage").src = images[currentImageIndex];
    updateThumbnails();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("mainImage").src = images[currentImageIndex];
    updateThumbnails();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("mainImage").src = images[currentImageIndex];
    updateThumbnails();
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle("active", index === currentImageIndex);
    });
}

// Initialize the first thumbnail as active
updateThumbnails();


