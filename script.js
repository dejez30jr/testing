const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", ()=>{
  menuList.classList.toggle("hidden")
})


let currentIndex = 0;
let autoSlideInterval;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(n) {
    showSlides(currentIndex + n);
    resetAutoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlides(currentIndex + 1);
    }, 5000); // Change image every 5 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

window.onload = function() {
    showSlides(currentIndex);
    autoSlide();
};

