let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
function showslide(index){
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function prevslide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showslide(currentIndex);
}

function nextslide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showslide(currentIndex);
}
showslide(currentIndex)