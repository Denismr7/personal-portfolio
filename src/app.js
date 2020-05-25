var tl = new TimelineMax();
//var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();
const aboutAnimation = Power2.easeInOut;

tl.fromTo("#personal-photo", 1, {x: 400, opacity: 0}, {x: 0, opacity: 1, ease: aboutAnimation });
tl.fromTo("#about-text", 1, {x: -400, opacity: 0}, {x: 0, opacity: 1, ease: aboutAnimation }, "=-1");
tl.fromTo("#tec-items-container", 1.5, {y: 200, opacity: 0}, {y: 0, opacity: 1, ease: aboutAnimation });

const scene = new ScrollMagic.Scene({
    triggerElement: "#about h1"
}).setTween(tl).addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".title-container"
}).setTween(tl).addTo(controller);