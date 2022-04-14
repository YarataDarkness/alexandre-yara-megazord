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
