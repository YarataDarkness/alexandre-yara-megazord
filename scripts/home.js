
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