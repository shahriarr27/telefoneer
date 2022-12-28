
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


//charts
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Time of Day');
        data.addColumn('number', 'Lookups');

        data.addRows([
          [new Date(2015, 0, 1), 5],  
          [new Date(2015, 0, 2), 7],  
          [new Date(2015, 0, 3), 3],
          [new Date(2015, 0, 4), 1],  
          [new Date(2015, 0, 5), 3],  
          [new Date(2015, 0, 6), 4],
          [new Date(2015, 0, 7), 3],  
          [new Date(2015, 0, 8), 4],  
          [new Date(2015, 0, 9), 2],
          [new Date(2015, 0, 10), 5], 
          [new Date(2015, 0, 11), 8], 
          [new Date(2015, 0, 12), 6],
          [new Date(2015, 0, 13), 3], 
          [new Date(2015, 0, 14), 3], 
          [new Date(2015, 0, 15), 5],
          [new Date(2015, 0, 16), 7], 
          [new Date(2015, 0, 17), 6], 
          [new Date(2015, 0, 18), 6],
          [new Date(2015, 0, 19), 3], 
          [new Date(2015, 0, 20), 1], 
          [new Date(2015, 0, 21), 2],
          [new Date(2015, 0, 22), 4], 
          [new Date(2015, 0, 23), 6], 
          [new Date(2015, 0, 24), 5],
          [new Date(2015, 0, 25), 9], 
          [new Date(2015, 0, 26), 4], 
          [new Date(2015, 0, 27), 9],
          [new Date(2015, 0, 28), 8], 
          [new Date(2015, 0, 29), 6], 
          [new Date(2015, 0, 30), 4],
          [new Date(2015, 0, 31), 6], 
          [new Date(2015, 1, 1), 7],  
          [new Date(2015, 1, 2), 9]
        ]);


      var options = {
        legend: 'none',
        series: {
          0: { color: '#BA1B58' },
        },
        chartArea:{
          leftBorder: 'red'
        },
        hAxis: {
          baselineColor: 'transparent',
          gridlines:{
            color: 'transparent',
          }
        },
        vAxis: {
          baselineColor: 'transparent',
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }


//chart pie

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Votes');
  data.addColumn('number', 'Score');
  data.addRows([
    ['Scam', 10],
    ['Telemarketing', 0],
    ['Market Research', 0],
    ['Public Poll', 4],
    ['Safe', 50],
    ['Courier', 6],
    ['Other', 10],
  ]);

  var options = {
    sliceVisibilityThreshold: 0,
    colors: ['#F34841', '#F89838', '#F8E008', '#8CC340', '#0F9D4F', '#8E58DB', '#808C92']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//comment sorting

// create timestamp //
function monthDate(param) {
  let dateValue  = Date.parse(param)/1000;
  return dateValue;
}

// function call here for adding timestamp value in data-timestamp attribute by fetching data from data-attribute //
var className = document.querySelectorAll('.date-month');
for(let i = 0; i < className.length; i++) {
  var attribute = document.querySelectorAll('.date-month')[i].getAttribute("data-attribute");
  document.querySelectorAll('.date-month')[i].setAttribute('data-timestamp', monthDate(attribute));
}

// list.js api method call //
let options = {
    valueNames: [
      'number',
      'name',
      { name: 'date-month', attr: 'data-timestamp' }
      
    ]
};
const hackerList = new List('comment-list', options);

$("#sort-icon").click(function(){
  if($("#sort-icon").hasClass('bi-sort-up')){
    $("#sort-icon").removeClass("bi-sort-up");
    $("#sort-icon").addClass("bi-sort-up-alt");
    $(".sort-text").html("Sort by oldest");
  }
  else{
    $("#sort-icon").removeClass("bi-sort-up-alt");
    $("#sort-icon").addClass("bi-sort-up");
    $(".sort-text").html("Sort by latest");
  }
});