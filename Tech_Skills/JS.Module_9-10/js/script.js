$(function () {

  var $jcarousel = $('.jcarousel');

  $jcarousel
      .on('jcarousel:reload jcarousel:create', function () {})
      .jcarousel({
          wrap: 'circular'
      });

  $('.jcarousel-control-prev')
      .jcarouselControl({
          target: '-=1'
      });

  $('.jcarousel-control-next')
      .jcarouselControl({
          target: '+=1'
      });

  $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
          $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
          $(this).removeClass('active');
      })
      .on('click', function(e) {
          e.preventDefault();
      })
      .jcarouselPagination({
          perPage: 1,
          item: function(page) {
              return '<a href="#' + page + '">' + page + '</a>';
      }})





      /** CUSTOM SELECT  **/

  $('select').selectBox({
    keepInViewport: false
  });




    /**   CUSTOM CHECKBOX  **/

  $(".checkbox__jquery").each(
    function() {
       
      changeCheckStart($(this));
       
  });

  var $tempCheckBox = $('.temp');

  $tempCheckBox.remove("input");





    /**   SLIDE DOWN MENU  **/

  var $slideMenu = $('.slid-menu');

  $slideMenu.hover(
    function () {
      $(this).children('.submenu').children('li').css('display', 'block');
      $(this).children('.submenu').children('li').animate({
          backgroundColor: '#8E8F8D',
          left: '0'
        }, 1500, 'easeInOutBack');
    },
    function () {
      $(this).children('.submenu').children('li').animate({
        backgroundColor: '#BBBEBB',
        left: '-50'
      }, 1500, 'easeInOutBack');
      $(this).children('.submenu').children('li').css('display', 'none');
    }
  );

});


