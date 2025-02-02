
const tl = gsap.timeline()

tl.from(".hello",{
    y:580,
    duration:2,
    
    ease: "power3.in",
    
    

},".")
tl.from(".h",{
    opacity:0,
    duration:0.8,
    delay:1.8,
    y:200,
    stagger:0.09 ,
    ease: "power3.out",
    
    },".")
tl.from(".home",{
opacity:0,
duration:4,
delay:1.9,

stagger:0.3 ,
ease: "power.out",

},".")
tl.from(".company",{
opacity:0,
duration:3,
delay:1.6,

stagger:0.5 ,
ease: "power.out",

},".")

tl.to(".title",{
    scale:12,
    duration:3,
    
    scrollTrigger:{
        trigger:".hello",
        markers:true,
        scroller:"body",
        start:"top 45%",
        end:"top 8%",
        scrub:true, 


    }
})


tl.to(".text", {
    x: -(document.querySelector(".text").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".text",
        start: "top 0%",
        scroller:".projects",
        end: "+=" + (document.querySelector(".text").scrollWidth - window.innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers:true
    }
});





