// note: querySelector needs the '.' included, but classList doesn't.
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button-right');
const prevButton = document.querySelector('.carousel__button-left');

// need to know the width so we know how far to move
const slideWidth = slides[0].getBoundingClientRect().width;


// this makes slides side by side; necessary in order to figure out how far to move for amountToMove
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    // this will move to all the slides left (-) by the translated amount (px)
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // need to make the next slide the current slide, to keep moving forward
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
   
    moveToSlide(track, currentSlide, prevSlide);
});


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
   
    moveToSlide(track, currentSlide, nextSlide); 
});