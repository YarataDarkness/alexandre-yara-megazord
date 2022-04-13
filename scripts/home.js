
const swiper = new Swiper('.swiper', {

   // If we need pagination
    pagination: {
     el: '.swiper-pagination',
    },
});




gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.to('section', {
    scrollTrigger: 'section',
    markers: true,
    y: '100%',
    opacity: '100%',
    toggleActions: 'restart complete reverse reset',
    duration: 2,
});


//sprite work//

const isbody = document.querySelector('body');
const issonic = document.querySelector('.sprite');
let isScrolling;


window.addEventListener('scroll', function(){
    window.clearTimeout( isScrolling );
    isbody.classList.add("is-scrolling");


    isScrolling = setTimeout(function(){
        isbody.classList.remove("is-scrolling");
      }, 250);


    gsap.to('.sonic',{
        y: '10%',
        scrollTrigger:{
          scrub: true,
          markers: true,
          start: 'top 20%',
          end: 'bottom 50%',
          trigger: '.sprite',
          onEnter: (e) => {
            isbody.classList.remove("spriteup");
            isbody.classList.add("spritefall");
          },
          onEnterBack: (e) => {
            isbody.classList.remove("spritefall");
            isbody.classList.add("spriteup");
          }
        }
      })






});    
//









//


    // Optional parameters
   // direction: 'vertical',
   // loop: true,
  
    // If we need pagination
   // pagination: {
    // el: '.swiper-pagination',
   // },
  
    // Navigation arrows
    //navigation: {
    //  nextEl: '.swiper-button-next',
     // prevEl: '.swiper-button-prev',
    //},
  
    // And if we need scrollbar
   // scrollbar: {
    //  el: '.swiper-scrollbar',
    //},
 // });