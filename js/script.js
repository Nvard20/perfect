//slider
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    parallax: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  //img-box
  $(document).ready(function() {
    $(window).scrollTop(0);
    let animated = false;
document.addEventListener('scroll', function(event) {
    if (window.pageYOffset > 200 && !animated) {
      $('.col-img-box').css({"display":"block"});
    }
})
});

$(document).ready(function() {
  $("a.scrollink").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
  });
});
var btn = $('#back_to_top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '330');
});


$(".burger").click(function() {
  $(this).toggleClass("change");
  $('.mobile-nav').slideToggle();
});

