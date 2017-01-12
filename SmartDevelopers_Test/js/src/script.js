'use strict';

$(function () {


      /***   MY WORKS CAROUSEL  ***/

  var $myWorksJcarousel = $('.my-works__jcarousel');

  $myWorksJcarousel
      .on('jcarousel:reload jcarousel:create', function () {})
      .jcarousel({
          wrap: 'circular'
      });

  $myWorksJcarousel.jcarouselAutoscroll({
    interval: 5000
  });

  $('.my-works__jcarousel-pagination')
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


          /***  REVIEWS CAROUSEL  ***/
  
  var $reviewsJcarousel = $('.reviews__jcarousel');

  $reviewsJcarousel
      .on('jcarousel:reload jcarousel:create', function () {})
      .jcarousel({
          wrap: 'circular'
      });

  $('.reviews__jcarousel-pagination')
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

  $('.reviews__jcarousel-control-prev')
      .jcarouselControl({
          target: '-=1'
      });

  $('.reviews__jcarousel-control-next')
      .jcarouselControl({
          target: '+=1'
      });
  
          /** END CAROUSEL **/


                /***    QUESTION-ANSWER TAB      ***/

  var $switchQuestion = $('.question');
  var $switchAnswer = $('.answer');

  $switchQuestion.click(function () {
    $switchQuestion.removeClass('question--is-active');
    $switchAnswer.slideUp(1000);
    $(this).addClass('question--is-active');
    $(this).next($switchAnswer).slideDown(1000);
  });


          /***   END QUESTION-ANSWER TAB      ***/


          /****** MAP SCROLLING  *****/

            // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.map').on('click', onMapClickHandler);

          /****** END MAP SCROLLING  *****/


  var $menuButton = $('.menu-button');
  var $menu = $('.menu');

  $menuButton.click(function() {
    $menu.toggle('slow')
  });

  function windowSize() {
    if ($(window).width() >= 768 ) {
      $menu.show();
    }
  }

  $(window).resize(windowSize);

});