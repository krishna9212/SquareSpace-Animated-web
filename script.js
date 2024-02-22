tl=gsap.timeline();
tl.from(".nav-el>*",{
    duration: 1,
    delay: 1,
    opacity: 0,
    y: -50,
    stagger: 0.12
});

tl.from(".p1 > *", {
    x: -200,
    opacity:0,
    stagger:0.1

});

tl.from(" #left-img ", {
    scale:0,
    opacity:0
    
});
tl.from(" #right-img ", {
    scale:0,
    opacity:0
});
tl.to("#scroll-down", {
    duration: 0.6,
    opacity:0.6,
    y: -20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});