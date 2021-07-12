window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.nav');
    const head = document.querySelector('.nav-head');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
      head.classList.remove("d-block");
    }else{
      nav.classList.remove("add-shadow");
      head.classList.add("d-block");
    }
  });



function NumCounter(){
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach( counter => {
 const animate = () => {
    const value = +counter.getAttribute('value');
    const data = +counter.innerText;
   
    const time = value / speed;
   if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 100);
      }else{
        counter.innerText = value;
      }
   
 }
 
 animate();
});
}
$(window).scroll(function() {
 var hT = $('#scroll-to').offset().top,
     hH = $('#scroll-to').outerHeight(),
     wH = $(window).height(),
     wS = $(this).scrollTop();
 if (wS > (hT+hH-wH)){
     NumCounter();
 }
});


$("#intro-modal").on('hidden.bs.modal', function (e) {
  $(".embed-responsive-item").attr("src", $(".embed-responsive-item").attr("src"));
});