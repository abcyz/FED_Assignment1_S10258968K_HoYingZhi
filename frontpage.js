document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "images/Advertisment1.png",
        "images/Advertisment2.png",
        "images/Advertisment3.png"
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
