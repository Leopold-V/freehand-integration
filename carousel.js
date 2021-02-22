const stack = document.querySelectorAll('.carousel-img');
const arrow_left = document.querySelector('.carousel-arrow-left');
const arrow_right = document.querySelector('.carousel-arrow-right');
const current_img = document.querySelector('.carousel-img.active');

let index = 0;

const carouselLeft = () => {
    stack[index].classList.toggle('active');
    if (index === 0) {
        index = stack.length-1;
        stack[(index)].classList.toggle('active');
    } else {
        stack[(index-1)].classList.toggle('active');
        index--;
    }
}

const carouselRight = () => {
    stack[index].classList.toggle('active');
    stack[(index+1) % stack.length].classList.toggle('active');
    index = (index + 1) % stack.length;
}

arrow_left.addEventListener('click', carouselLeft);
arrow_right.addEventListener('click', carouselRight);
