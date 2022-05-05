gsap.registerPlugin(ScrollTrigger);

/*gsap.timeline({
    duration: 2,
    scrollTrigger: {
    markers: true,
    y: '100%',
    opacity: '100%',
    toggleActions: 'restart complete reverse reset',
    trigger: 'section'
    },
})
.to('.videoSection', { y: '100%' })*/
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


fetch("https://api.lyrics.ovh/v1/crush%2040/istobefetched") 
  .then(data => data.json()) 
  .then(result => { 
    console.log(result);
  }); 


const isform = document.querySelector('.parolesform');

isform.addEventListener("submit", function(e){
  e.preventDefault();
});


const newLineToBr = function(str) {
  result;
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

const isdivparoles = document.querySelector('.divforparoles');

const promesse = new Promise((resolve, reject) => {
  const respectPromesse = true;

  if (respectPromesse === true) {
    resolve("Promesse respectée");
  } else {
    reject("Promesse brisée");
  }
});



promesse
  .then( isdivparoles => isdivparoles.innerhtml = (result))
  //TP 08 ETAPE 8
  .catch( isdivparoles => isdivparoles.innerhtml = ("Désolé, les paroles n'ont pu être trouvées. En voici la raison:"))
  //.catch(error => console.log(error))
  .finally(() => console.log("Promesse complétée"));


const isspinnerborder = document.querySelector('.spinner-border');
const isrecherche = document.querySelector('#isrecherche');

isrecherche.addEventListener("submit", function(){
  isspinnerborder.style.visibility="visible";
})
