
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK 
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
  });

  setTimeout(function() {
    //your code to be executed after 1 second
    var titleObj = document.getElementById('main-title');
    //console.log(subTitleObj);
    titleObj.style.opacity = 0;
  }, 5000);

  // title fadeout delay
  setTimeout(function() {
    //your code to be executed after 1 second
    var subTitleObj = document.getElementById('sub-title');
    //console.log(subTitleObj);
    subTitleObj.style.opacity = 0;
    //document.getElementById('section_1').style.backgroundColor = 'none';
  }, 7000);
    
  })(window.jQuery);


