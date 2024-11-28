document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "images/Cat.jpg",
        "images/Josh.jpg",
        "images/OtherImage.jpg"
    ];
    
    let currentImageIndex = 0;
    const advertImage = document.querySelector(".advertpic");
    const dots = document.querySelectorAll(".dot");

    function updateImage(index) {
        advertImage.src = images[index];
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    updateImage(currentImageIndex);
    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage(currentImageIndex);
    }, 3000);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            currentImageIndex = index;
            updateImage(currentImageIndex);
        });
    });
});
