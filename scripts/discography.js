gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.timeline({
    duration: 2,
    scrollTrigger: {
    markers: true,
    y: '100%',
    opacity: '100%',
    toggleActions: 'restart complete reverse reset',
    trigger: 'section'
    },
})
.to('.videoSection', { y: '100%' })
