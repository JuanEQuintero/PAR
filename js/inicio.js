document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    
    let index = 0;
    const intervalTime = 3000; 

    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, intervalTime);
});
