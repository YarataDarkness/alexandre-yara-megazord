
const swiper = new Swiper('.swiper', {

   // If we need pagination
    pagination: {
     el: '.swiper-pagination',
    },
});

gsap.to('.issectioncarou', {
    scrollTrigger: 'section',
    markers: true,
    y: '-16%',
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


const istobefetched = document.querySelector('.tobefectched');

//TP 08 ETAPE 4 et 5.3
//ETAPE 9: LIVE AND LEARN, open your heart
fetch("https://api.lyrics.ovh/v1/crush40/") // L'adresse URL des données à aller chercher
  .then(istobefetched => { // Attendre que les données soient reçues
    // Convertir les données au format désiré
  })
  .then(result => (result),{ // Attendre que les données soient converties
    // Faire du résultat ce que bon vous semble
  });

//TP 08 ETAPE 5.1
const isform = document.querySelector('.parolesform');

isform.addEventListener("submit", function(e){
  e.preventDefault();
});

//TP 08 ETAPE 6
const newLineToBr = function(str) {
  result;
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

const isdivparoles = document.querySelector('.divforparoles');

//TP 08 ETAPE 7
const promesse = new Promise((resolve, reject) => {
  const respectPromesse = true;

  if (respectPromesse === true) {
    resolve("Promesse respectée");
  } else {
    reject("Promesse brisée");
  }
});

promesse
  .then(value => console.log(value))
  //TP 08 ETAPE 8
  .catch(isdivparoles => isdivparoles.innerHTML("Désolé, les paroles n'ont pu être trouvées. En voici la raison:"))
  //.catch(error => console.log(error))
  .finally(() => console.log("Promesse complétée"));






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