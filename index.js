$(document).ready(function (){
$(window).scroll(function(){
    if(window.scrollY > 20){
        // window.alert("Im scrolled");
        $(".navbar").addClass("sticky");
    }
    else{
        $(".navbar").removeClass("sticky");
    }
    if(this.scrollY > 500){
        $(".scroll-up-btn").addClass("show");
    }
    else{
        $(".scroll-up-btn").removeClass("show"); 
    }
});
//slide up
$(".scroll-up-btn").click(function(){
$('html').animate({scrollTop: 0});
});
//   toggle menu
$(".menu-btn").click(()=>{
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})
//typing
var typed  = new Typed(".typing",{
    strings: ["Youtuber","Blogger","Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
var typedd  = new Typed(".typing2",{
    strings: ["Youtuber","Blogger","Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
//carousel owl
$(".carousel").owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1,
            nav: false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
})
})