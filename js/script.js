let menu_img=document.querySelector('.menu_img')
let menu_list=document.querySelector('.menu_list')

menu_img.addEventListener('click',()=>{
    menu_list.classList.toggle('display_block')   
    
})



window.onscroll = () =>{
  menu_list.classList.remove('display_block')
}

// -------------- click to top -------------------

let mybutton = document.getElementById("click_top");
let header=document.getElementById('header')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// --------------------- running No. effect --------------


// let valueDisplays=document.querySelectorAll('.num');
// let num3=document.querySelector('.num3')
// let interval=1000;

// valueDisplays.forEach((valueDisplay)=>{
//     let startValue=0;
//     let endValue=parseInt(valueDisplay.getAttribute("data-val"));

    
//     let duration=Math.floor(interval / endValue)
//     let counter=setInterval(function(){
//         startValue+=1;
//         valueDisplay.textContent=startValue + '+';
//         if(startValue===endValue){
//             clearInterval(counter)
//         }
//     },duration)

// })




// ------------------------------

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



// ---------------- Swiper --------------------

// ################################################

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

// ################################################
