var modal=document.getElementById("myModal");
var modalBtn=document.getElementById("modalBtn");
var closeBtn=document.querySelector(".closeBtn");
var whatsappBtn=document.querySelector(".social-icons .fa-whatsapp");

whatsappBtn.addEventListener("click",showNum);
modalBtn.addEventListener("click",showModal);
closeBtn.addEventListener("click",closeModal);
window.addEventListener("click",outSideClick);

function showModal(){
  modal.style.display="Block";
}

function closeModal(){
   modal.style.display="none";
}

function outSideClick(e){
  if(e.target===modal){
     modal.style.display="none";
    }
}
function showNum(){
  alert("Add me on Whatsapp with +2348163471885 \n\t\t\t\t Say laviii... it's spanish!")}


var navBtn=document.querySelector(".navbar-header button");
var p1=navBtn.querySelector(".p1");
var p2=navBtn.querySelector(".p2");
var p3=navBtn.querySelector(".p3");

navBtn.addEventListener("click",navRoll);

function navRoll(){
  navBtn.style.animate="1s roller";
  p1.style.animate="1s roller;";
  p2.style.animate="1s shake";
  p3.style.animate="1s roller";
}
$(document).ready(function() {
  $(".b2top-icon").fadeOut();
  //Check to see if the window is top if not then display button
  $(window).scroll(function() 
  { if ($(this).scrollTop() > 100){
      $(".b2top-icon").fadeIn(); } 
  else {
      $(".b2top-icon").fadeOut(); 
  } }); 
  
  //Click event to scroll to top
  
  $(".b2top-icon").click(function() { 
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
  });
}); 

