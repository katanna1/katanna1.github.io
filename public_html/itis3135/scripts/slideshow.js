'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');


const slideshowItems = Array.from(document.querySelectorAll('.slideshow-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const SLIDESHOW_SIZE = slideshowItems.length;
const carouselNav = document.querySelector('.slideshow-nav');

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

//event listener for carousel nav items
carouselNav.addEventListener('click', goto);

function swipe(e){
    const currentSlideshowItem = document.querySelector('.slideshow-item.active');
    const currentIndex = slideshowItems.indexOf(currentSlideshowItem);

    let nextIndex;
    if(e.currentTarget.classList.contains('left')){
        if(currentIndex === 0){
            nextIndex = SLIDESHOW_SIZE - 1;
        }
            else{
            nextIndex = currentIndex - 1;
        }

    } else{
            if(currentIndex === SLIDESHOW_SIZE - 1){
                nextIndex = 0;
            }
            else{
                nextIndex = currentIndex + 1;
            }
    }   
    slideshowItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentSlideshowItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

//Go to the image that shares the same index as the navigation item
function goto(e){
    const currentSlideshowItem = document.querySelector('.slideshow-item.active'); //current img
    const currentIndex = slideshowItems.indexOf(currentSlideshowItem); //current index
    let nextIndex;

    if(e.target.classList.contains('active')){
        return;
    }
    
    nextIndex = navItems.indexOf(e.target);

    slideshowItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentSlideshowItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');

}
