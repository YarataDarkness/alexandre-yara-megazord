
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

//

const body = document.querySelector('body');
let isScrolling;

window.addEventListener('scroll', function() {
	window.clearTimeout( isScrolling );
  body.classList.add("is-scrolling");

	isScrolling = setTimeout(function() {
    body.classList.remove("is-scrolling");
	}, 250);
});

let anim = gsap.timeline({
  scrollTrigger: {
    trigger: '#divAnim',
    
    onUpdate: (e) => { 
      
      if(e.progress){
         if(e.direction==-1){
          body.classList.add("direction-up");
          body.classList.remove("direction-down");
        }else{
          body.classList.add("direction-down");
          body.classList.remove("direction-up");
        }
      }
    }
  
  }
});

//TP 08 ETAPE 4
fetch("https://api.lyrics.ovh/v1/") // L'adresse URL des données à aller chercher
  .then(data => { // Attendre que les données soient reçues
    // Convertir les données au format désiré
  })
  .then(result => { // Attendre que les données soient converties
    // Faire du résultat ce que bon vous semble
  });






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