$(document).ready(function(){

  $(window).on("scroll",function(){
    var scrollDistance = $(window).scrollTop();
    var $navbar = $(".js-navbar");
    if(scrollDistance > 40){
      $navbar.addClass("navbar--colored");
    }
    else{
      $navbar.removeClass("navbar--colored");
    }
  })
    $(window).on("scroll",function(){
    var scrollDistance = $(window).scrollTop();
    var $navbar = $(".js-dropdown");
    if(scrollDistance > 550){
      $navbar.addClass("dropdown--colored");
    }
    else{
      $navbar.removeClass("dropdown--colored");
    }
  })


  $(window).on("scroll",function(){
    var scrollDistance = $(window).scrollTop();
    var $navbar = $(".js-scrollup");
    if(scrollDistance > 640){
      $navbar.addClass("u-opacity--1");
    }
    else{
      $navbar.removeClass("u-opacity--1");
    }
  })
    $('.scrolldown-btn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });

    $('.scrollup-btn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 
        }, 400, 'linear');
    });

  if(screen.width > 768){
      new WOW().init();
  }

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:16,
      nav:true,
      navText:[],
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          888:{
              items:3
          },
          1600:{
              items:4
          }
      }
    })


  $('#design-categorys--one').mouseenter(function(){
    $('#bg--hover').removeClass().addClass(
      $(this).attr('rel'));
    $('#bg--hover').addClass('bg--hover1').siblings()
    .removeClass('bg--hover1');
  })
    $('#design-categorys--two').hover(function(){
    $('#bg--hover').removeClass().addClass(
      $(this).attr('rel'));
    $('#bg--hover').addClass('bg--hover2').siblings()
    .removeClass('bg--hover2');
  })
      $('#design-categorys--three').hover(function(){
    $('#bg--hover').removeClass().addClass(
      $(this).attr('rel'));
    $('#bg--hover').addClass('bg--hover3').siblings()
    .removeClass('bg--hover3');
  })
      $('.design-category').mouseleave(function(){
    $('#bg--hover').removeClass().addClass(
      $(this).attr('rel'));
    $('#bg--hover').addClass('bg').siblings()
    .removeClass('bg');
  })


      
      /* This is basic - uses default settings */
  
  $("a#single_image").fancybox();
  
  /* Using custom settings */
  
  $("a#inline").fancybox({
    'hideOnContentClick': true
  });

  /* Apply fancybox to multiple items */
  
  $("a.group").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'   : 600, 
    'speedOut'    : 200, 
    'overlayShow' : false
  });

	})

function toggle(){
  document.getElementById('popup-close').style.opacity = "1"
  document.getElementById('popup-close').style.visibility = "visible"
 }
 function popupclose(){
  document.getElementById('popup-close').style.opacity = "0"
  document.getElementById('popup-close').style.visibility = "hidden"
 }
 function toggle2(){
  document.getElementById('popup-close2').style.opacity = "1"
  document.getElementById('popup-close2').style.visibility = "visible"
  document.getElementById('popup-close').style.opacity = "0"
  document.getElementById('popup-close').style.visibility = "hidden"
  document.getElementById('overlay').style.display = "none"
 }
 function popupclose2(){
  document.getElementById('popup-close2').style.opacity = "0"
  document.getElementById('popup-close2').style.visibility = "hidden"
  document.getElementById('popup-close').style.opacity = "1"
  document.getElementById('popup-close').style.visibility = "visible"
  document.getElementById('overlay').style.display = "block"

 }
  function toggle3(){
  document.getElementById('popup-close2').style.opacity = "1"
  document.getElementById('popup-close2').style.visibility = "visible"
 }

function show1(){
  document.getElementById('thesis-content1').style.display = "block"
  document.getElementById('thesis-content2').style.display = "none"
  document.getElementById('thesis-content3').style.display = "none"
  document.getElementById('thesis-content4').style.display = "none"
  document.getElementById('thesis-content5').style.display = "none"
  document.getElementById('close').style.display = "none"
 }

function show2(){
  document.getElementById('thesis-content1').style.display = "none"
  document.getElementById('thesis-content2').style.display = "block"
  document.getElementById('thesis-content3').style.display = "none"
  document.getElementById('thesis-content4').style.display = "none"
  document.getElementById('thesis-content5').style.display = "none"
  document.getElementById('close').style.display = "block"
 }

 function show3(){
  document.getElementById('thesis-content1').style.display = "none"
  document.getElementById('thesis-content2').style.display = "none"
  document.getElementById('thesis-content3').style.display = "block"
  document.getElementById('thesis-content4').style.display = "none"
  document.getElementById('thesis-content5').style.display = "none"
  document.getElementById('close').style.display = "block"
 }
 function show4(){
  document.getElementById('thesis-content1').style.display = "none"
  document.getElementById('thesis-content2').style.display = "none"
  document.getElementById('thesis-content3').style.display = "none"
  document.getElementById('thesis-content4').style.display = "block"
  document.getElementById('thesis-content5').style.display = "none"
  document.getElementById('close').style.display = "block"
 }
function show5(){
  document.getElementById('thesis-content1').style.display = "none"
  document.getElementById('thesis-content2').style.display = "none"
  document.getElementById('thesis-content3').style.display = "none"
  document.getElementById('thesis-content4').style.display = "none"
  document.getElementById('thesis-content5').style.display = "block"
  document.getElementById('close').style.display = "block"
 }


 function show6(){
  document.getElementById('thesis-content6').style.display = "block"
  document.getElementById('thesis-content7').style.display = "none"
  document.getElementById('thesis-content8').style.display = "none"
  document.getElementById('thesis-content9').style.display = "none"
  document.getElementById('thesis-content10').style.display = "none"
  document.getElementById('close2').style.display = "none"
 }
function show7(){
  document.getElementById('thesis-content6').style.display = "none"
  document.getElementById('thesis-content7').style.display = "block"
  document.getElementById('thesis-content8').style.display = "none"
  document.getElementById('thesis-content9').style.display = "none"
  document.getElementById('thesis-content10').style.display = "none"
  document.getElementById('close2').style.display = "block"
 }
function show8(){
  document.getElementById('thesis-content6').style.display = "none"
  document.getElementById('thesis-content7').style.display = "none"
  document.getElementById('thesis-content8').style.display = "block"
  document.getElementById('thesis-content9').style.display = "none"
  document.getElementById('thesis-content10').style.display = "none"
  document.getElementById('close2').style.display = "block"
 }

 function show9(){
  document.getElementById('thesis-content6').style.display = "none"
  document.getElementById('thesis-content7').style.display = "none"
  document.getElementById('thesis-content8').style.display = "none"
  document.getElementById('thesis-content9').style.display = "block"
  document.getElementById('thesis-content10').style.display = "none"
  document.getElementById('close2').style.display = "block"
 }
function show10(){
  document.getElementById('thesis-content6').style.display = "none"
  document.getElementById('thesis-content7').style.display = "none"
  document.getElementById('thesis-content8').style.display = "none"
  document.getElementById('thesis-content9').style.display = "none"
  document.getElementById('thesis-content10').style.display = "block"
  document.getElementById('close2').style.display = "block"
 }

  function show11(){
  document.getElementById('thesis-content11').style.display = "block"
  document.getElementById('thesis-content12').style.display = "none"
  document.getElementById('thesis-content13').style.display = "none"
  document.getElementById('thesis-content14').style.display = "none"
  document.getElementById('thesis-content15').style.display = "none"
  document.getElementById('thesis-content16').style.display = "none"
  document.getElementById('close3').style.display = "none"
 }
 function show12(){
  document.getElementById('thesis-content11').style.display = "none"
  document.getElementById('thesis-content12').style.display = "block"
  document.getElementById('thesis-content13').style.display = "none"
  document.getElementById('thesis-content14').style.display = "none"
  document.getElementById('thesis-content15').style.display = "none"
  document.getElementById('thesis-content16').style.display = "none"
  document.getElementById('close3').style.display = "block"
 }
 function show13(){
  document.getElementById('thesis-content11').style.display = "none"
  document.getElementById('thesis-content12').style.display = "none"
  document.getElementById('thesis-content13').style.display = "block"
  document.getElementById('thesis-content14').style.display = "none"
  document.getElementById('thesis-content15').style.display = "none"
  document.getElementById('thesis-content16').style.display = "none"
  document.getElementById('close3').style.display = "block"
 }
 function show14(){
  document.getElementById('thesis-content11').style.display = "none"
  document.getElementById('thesis-content12').style.display = "none"
  document.getElementById('thesis-content13').style.display = "none"
  document.getElementById('thesis-content14').style.display = "block"
  document.getElementById('thesis-content15').style.display = "none"
  document.getElementById('thesis-content16').style.display = "none"
  document.getElementById('close3').style.display = "block"
 }
 function show15(){
  document.getElementById('thesis-content11').style.display = "none"
  document.getElementById('thesis-content12').style.display = "none"
  document.getElementById('thesis-content13').style.display = "none"
  document.getElementById('thesis-content14').style.display = "none"
  document.getElementById('thesis-content15').style.display = "block"
  document.getElementById('thesis-content16').style.display = "none"
  document.getElementById('close3').style.display = "block"
 }
 function show16(){
  document.getElementById('thesis-content11').style.display = "none"
  document.getElementById('thesis-content12').style.display = "none"
  document.getElementById('thesis-content13').style.display = "none"
  document.getElementById('thesis-content14').style.display = "none"
  document.getElementById('thesis-content15').style.display = "none"
  document.getElementById('thesis-content16').style.display = "block"
  document.getElementById('close3').style.display = "block"
 }
  function show17(){
  document.getElementById('box-content1').style.display = "block"
  document.getElementById('box-content2').style.display = "none"
  document.getElementById('box-content3').style.display = "none"
  document.getElementById('box-content4').style.display = "none"
  document.getElementById('box-content5').style.display = "none"
  document.getElementById('box-content6').style.display = "none"
  document.getElementById('close4').style.display = "none"
 }
  function show18(){
  document.getElementById('box-content1').style.display = "none"
  document.getElementById('box-content2').style.display = "block"
  document.getElementById('box-content3').style.display = "none"
  document.getElementById('box-content4').style.display = "none"
  document.getElementById('box-content5').style.display = "none"
  document.getElementById('box-content6').style.display = "none"
  document.getElementById('close4').style.display = "block"
 }
  function show19(){
  document.getElementById('box-content1').style.display = "none"
  document.getElementById('box-content2').style.display = "none"
  document.getElementById('box-content3').style.display = "block"
  document.getElementById('box-content4').style.display = "none"
  document.getElementById('box-content5').style.display = "none"
  document.getElementById('box-content6').style.display = "none"
  document.getElementById('close4').style.display = "block"
 }
  function show20(){
  document.getElementById('box-content1').style.display = "none"
  document.getElementById('box-content2').style.display = "none"
  document.getElementById('box-content3').style.display = "none"
  document.getElementById('box-content4').style.display = "block"
  document.getElementById('box-content5').style.display = "none"
  document.getElementById('box-content6').style.display = "none"
  document.getElementById('close4').style.display = "block"
 }
  function show21(){
  document.getElementById('box-content1').style.display = "none"
  document.getElementById('box-content2').style.display = "none"
  document.getElementById('box-content3').style.display = "none"
  document.getElementById('box-content4').style.display = "none"
  document.getElementById('box-content5').style.display = "block"
  document.getElementById('box-content6').style.display = "none"
  document.getElementById('close4').style.display = "block"
 }
  function show22(){
  document.getElementById('box-content1').style.display = "none"
  document.getElementById('box-content2').style.display = "none"
  document.getElementById('box-content3').style.display = "none"
  document.getElementById('box-content4').style.display = "none"
  document.getElementById('box-content5').style.display = "none"
  document.getElementById('box-content6').style.display = "block"
  document.getElementById('close4').style.display = "block"
 }
 





