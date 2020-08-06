const slide = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    //Get current class
     const current =  document.querySelector('.current');
     // Remove current class
     current.classList.remove('current');
     //check for next slide
     if(current.nextElementSibling){
         // Add current to next sibling
         current.nextElementSibling.classList.add('current');
     }
     else{
         // Add current to start
         slide[0].classList.add('current');
     }
     setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    //Get current class
     const current =  document.querySelector('.current');
     // Remove current class
     current.classList.remove('current');
     //check for previous slide
     if(current.previousElementSibling){
         // Add current to previous sibling
         current.previousElementSibling.classList.add('current');
     }
     else{
         // Add current to last
         slide[slide.length - 1].classList.add('current');
     }
     setTimeout(() => current.classList.remove('current'));
};

//Button Events
next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


//Auto slide
 if(auto) {
     //Run next slider at interval time
     slideInterval = setInterval(nextSlide, intervalTime);
 }

 
//health button
var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector(".btn_protocal"),
    x = document.querySelector(".x");

btn.addEventListener("click", appear);

function appear() {
    parent.style.display = "block";
}

x.addEventListener("click", exit);
function exit() {
    parent.style.display = "none";
}

parent.addEventListener("click", exitParent)
function exitParent(e) {
    if (e.target.className == "modal-parent") {
        parent.style.display = "none";
    }
}



