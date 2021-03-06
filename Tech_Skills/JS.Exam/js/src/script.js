'use strict';

$(function () {


          /** CAROUSEL **/
  
  var $jcarousel = $('.jcarousel');

  $jcarousel
      .on('jcarousel:reload jcarousel:create', function () {})
      .jcarousel({
          wrap: 'circular'
      });

  $('.jcarousel__control-prev')
      .jcarouselControl({
          target: '-=1'
      });

  $('.jcarousel__control-next')
      .jcarouselControl({
          target: '+=1'
      });
  


          /**   SEARCH PARTNER   **/

  var $gridLink;
  var $gridItem = $('.grid__item');
  var $searchField = $('.search-partner__search-field');
  var $searchButton = $('.search-partner__search-button');


  function search() {
    $gridLink = $('.grid__link');
    $gridLink.remove();

    var searchRequest = $searchField.val();
    var test;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://pixabay.com/api/?key=2734191-68f6286ccecedd5b282fb2fd5&q=' + searchRequest + '&image_type=photo&per_page=7', false);
    xhr.send();

    var data = JSON.parse(xhr.responseText);


    $.each(data.hits, function(i, val){
      $gridItem.eq(i).css({
        background: 'url(' + val.previewURL + ') center center no-repeat',
        backgroundSize: 'cover'
      });
      $gridLink = '<a class="grid__link" href="'+ val.webformatURL +'" title="'+ val.webformatURL +'" target="_blank">' +
                    '<div class="grid__item-title-box">' +
                      '<h1 class="grid__item-title">' + val.tags + '</h1>' +
                    '</div>' +
                  '</a>';
      $gridItem.eq(i).append($gridLink);
    });
  }

  $(window).on('load', search);

  $searchButton.on('click', search);

  $searchField.keydown(function(event) {
    if ( event.keyCode == 13 ) {
      event.preventDefault();
      search();
    }
  });




        /** GRID **/


    // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid__item',
    gutter: 20
  });



        

  

/*
  function search() {
    $gridLink = $('.grid__link');
    $gridLink.remove();

    var searchRequest = $searchField.val();
    var test;

    test = $.ajax({
      url: 'https://pixabay.com/api/?key=2734191-68f6286ccecedd5b282fb2fd5&q=' + searchRequest + '&image_type=photo&per_page=7',
      dataType: 'json'
    })
    .done(function(data) {
      $.each(data.hits, function(i, val){
        $gridItem.eq(i).css({
          background: 'url(' + val.previewURL + ') center center no-repeat',
          backgroundSize: 'cover'
        });
        $gridLink = '<a class="grid__link" href="'+ val.webformatURL +'" title="'+ val.webformatURL +'" target="_blank">' +
                      '<div class="grid__item-title-box">' +
                        '<h1 class="grid__item-title">' + val.tags + '</h1>' +
                      '</div>' +
                    '</a>';
        $gridItem.eq(i).append($gridLink);
      });
    })
    .fail(function() {});
  }*/

});