//cookie popup
// var cookiePopup = document.querySelector('.cookie-popup'),
//     cookiePopupClose = document.querySelector('.cookie-popup__close');

// if (cookiePopup && cookiePopupClose) {
  
// 	cookiePopupClose.addEventListener('click', function (e) {
// 	 e.preventDefault();

//    setTimeout(function(){
//     cookiePopup.classList.remove('cookie-popup--active');
//   },800);
//   localStorage.setItem("cookie", "true");
//  });

//  if(!localStorage.getItem('cookie')) {
//     cookiePopup.classList.add('cookie-popup--active');
//   }
// }


////////////////////////////////
$(".smart-plugin__toggle").click(function(e) {
  e.preventDefault();
  $(".smart-plugin").toggleClass("smart-plugin--active");
});

$(".smart-plugin__close").click(function(e) {
  e.preventDefault();
  if ($(".smart-plugin").hasClass("smart-plugin--active")) {
    $(".smart-plugin").removeClass("smart-plugin--active");
  }
});

// main-nav
$(document).ready(function() {
  $(".main-nav").removeClass("main-nav--no-js");
  $(".nav-toggle").click(function(e) {
      e.preventDefault();
      $(".main-nav").addClass("main-nav--active");
  });

  $(".main-nav__nav-close").click(function(e) {
      $(".main-nav").removeClass("main-nav--active");
  });
})