gsap.registerPlugin(ScrollTrigger);

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


const istobefetched = document.querySelector('.tobefectched').value;

//TP 08 ETAPE 4 et 5.3

//TP 08 ETAPE 5.1
const isform = document.querySelector('.parolesform');
const isdivparoles = document.querySelector('.divforparoles');


//ETAPE 9: All Hail Shadow, open your heart
let istobefetchedsong="All Hail Shadow"


fetch("https://api.lyrics.ovh/v1/Crush 40/" + istobefetchedsong) .then(data => data.json()) .then(result => {     console.log(result); });

  isform.addEventListener("submit", function(e){
    e.preventDefault();
  });
//TP 08 ETAPE 6
const newLineToBr = function(str) {
  result;
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}


//TP 08 ETAPE 7
//const promesse = new Promise((resolve, reject) => {
 // const respectPromesse = true;

//  if (respectPromesse === true) {
 //   resolve("Promesse respectée");
//  } else {
///    reject("Promesse brisée");
  //}
//});



//promesse
//  .then( isdivparoles => isdivparoles.innerhtml = (result))
  //TP 08 ETAPE 8
 // .catch( isdivparoles => isdivparoles.innerhtml = ("Désolé, les paroles n'ont pu être trouvées. En voici la raison:"))
  //.catch(error => console.log(error))
 // .finally(() => console.log("Promesse complétée"));


//TP 08 ETAPE 10
const isspinnerborder = document.querySelector('.spinner-border');
const isrecherche = document.querySelector('#isrecherche');

isrecherche.addEventListener("submit", function(){
  isspinnerborder.style.visibility="visible";
})
