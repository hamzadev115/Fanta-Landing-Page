
let menu = document.querySelector('.hum');
let mobileHeader = document.querySelector('.menu');
let mouse=document.querySelector('#cursor');
let link =document.querySelectorAll('a');
let links = document.querySelectorAll('.menu a');


document.addEventListener("mousemove",function(details){
  details.clientX;
  details.clientX;
  setTimeout(function(){
    mouse.style.top=details.y+"px";
    mouse.style.left=details.x+"px";
  },100)

link.forEach(function (htag) {
    htag.addEventListener("mouseenter", function(){
        mouse.style.width='50px';
        mouse.style.height='50px';
        mouse.style.border="2px solid #fff";
        mouse.style.backgroundColor="transparent";
    });
    htag.addEventListener("mouseleave", function(){
        mouse.style.width='10px';
        mouse.style.height='10px';
        mouse.style.border="none";
        mouse.style.backgroundColor="#1238c1";
    });
  });
});

menu.addEventListener("click", function () {
  mobileHeader.classList.toggle("active");

  let isActive = mobileHeader.classList.contains('active');

  let iconElement = menu.querySelector('i');
  if (isActive) {
    iconElement.classList.remove('ri-menu-3-line');
    iconElement.classList.add('ri-close-line');
  } else {
    iconElement.classList.remove('ri-close-line');
    iconElement.classList.add('ri-menu-3-line');
  }
});
links.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileHeader.classList.remove('active'); 

    let iconElement = menu.querySelector('i');
    iconElement.classList.remove('ri-close-line');
    iconElement.classList.add('ri-menu-3-line');
  });
});

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "50% 50%",
    end: "50% 50%",
    scrub: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')



