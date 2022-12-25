
/*** Animation on scroll*/
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
  /*** Back to top button*/
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
  let backtotop = document.querySelector('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

// -----Country Code Selection
$( document ).ready(function() {
  var input = document.querySelector("#phone");
    intlTelInput(input, {
      initialCountry: "auto",
      separateDialCode: true,
      geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "us";
          success(countryCode);
        });
      },
    });

});

//comment slider
    var mySwiper1 = document.querySelector('.comments-swiper1');

    mySwiper1 = new Swiper('.comments-swiper1', {
      loop: true,
      freeMode: true,
      grabCursor: false,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: false
      },
      freeMode: true,
      speed: 9000,
      freeModeMomentum: false
    });
    
    var mySwiper2 = document.querySelector('.comments-swiper2');
    
    mySwiper2 = new Swiper('.comments-swiper2', {
      loop: true,
      freeMode: true,
      grabCursor: false,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true
      },
      freeMode: true,
      speed: 9000,
      freeModeMomentum: false
    });


const starBtn = $('.rating input');
const formFields = $('.form-group-hidden');

starBtn.on('click', function() {
  formFields.slideDown('slow');
});

//reply toggled input
$(function() {
  $('.reply-btn').click(function(j) {
    
    var dropDown = $(this).closest('.actions').find('.reply-form');
    $(this).closest('.comments-wrapper').find('.reply-form').not(dropDown).slideUp();
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});