/*inot in slider */
let input = document.querySelector("input");
input.onfocus = function(){
   this.style.border = "1px solid #fd5631";
}

/*services */
let icon  = document.getElementById("downv");
let down = document.getElementById("downh")
icon.onclick = function(){
   down.classList.toggle("shown")
}



/*fire carosal  */
$(document).ready(function(){
   $('.owl-carousel').owlCarousel();
 });
$('.owl-carousel').owlCarousel({
   center: true,
   items:2  ,
   loop:true,
   nav:true,
   margin:20,
   dots:false,
   // autoplay:true,
   autoplayTimeout:2000,
   responsive:{
      0:{
         items:1
      },
       600:{
           items:3
       },
       500:{
          items:1
       }
   }
});