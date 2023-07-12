var tl = gsap.timeline();
tl.from("#nav img , #nav a , #nav h4 , #nav button", {
    duration: 1, 
    delay:0.5,
     y: -150, 
     opacity: 0,
     stagger:0.1,
})
tl.from("#main h1",{
    duration: 1,
    y: 150,
    opacity: 0,
    stagger:0.1,
})
tl.from("#main #left-1",{
    duration: 1,
    x: -150,
    opacity: 0,
    stagger:0.1,
    scale: 10,
})
tl.from("#main #left-2",{
    duration: 1,
    x: -150,
    y: 150,
    opacity: 0,
    stagger:0.1,
    scale: 10,
})
tl.from("#main #right-1",{
    duration: 1,
    x: 150,
    y: -150,
    opacity: 0,
    stagger:0.1,
    scale: 10,
})
tl.from("#main #right-2",{
    duration: 1,
    x: 150,
    opacity: 0,
    stagger:0.1,
    scale: 10,
})
tl.from("#main h3",{
    duration: 1,
    opacity: 0,

})
tl.to("#main h3",{
    duration: 1,
    repeat: -1,
    yoyo: true,
    y:-40,
    stagger:0.3,

})