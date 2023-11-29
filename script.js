var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#blur")
// var h4all = document.querySelectorAll("#nav h4")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
    blur.style.left = dets.x-100+"px";
    blur.style.top = dets.y-100+"px";
})

// h4all.forEach(function(element){
//     element.addEventListener("mouseenter",function(){
//         cursor.style.scale = 3 // This will increase the size of the cursor
//         cursor.style.border = "1px solid white";
//         cursor.style.backgroundColor = "transparent";
//     })
//     element.addEventListener("mouseleave",function(){
//         cursor.style.scale = 1
//         cursor.style.border = "0px solid red";
//         cursor.style.backgroundColor = "red";
//     })
// })

gsap.to("#nav",{
    // color:"#000",
    backgroundColor: "#fff",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#nav a", {
    color:"#000",
    scrollTrigger:{
        trigger:"#nav a",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -90%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from("#dic1",{
    x: -70,
    y:-70,
    scrollTrigger:{
        trigger:"#dic1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub: 4
        // markers:true
    }
})

gsap.from("#dic2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#dic2",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub: 4
        // markers:true
    }
})