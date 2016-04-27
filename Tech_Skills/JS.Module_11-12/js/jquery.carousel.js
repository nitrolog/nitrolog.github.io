(function ($) {


  $.fn.jqueryCarousel = function (options) {

    var defaults = {
      pixelsOffset: '270',
      visibleImage: '3'
    };

    var settings = $.extend(defaults, options);
    

    var $leftArrow = $('.carousel__carousel-control-prev');
    var $rightArrow = $('.carousel__carousel-control-next');
    var $carouselList = $('.carousel__list');

    var currentListPosition = 0;
    var listLength = $carouselList.find('li').length;
    var maxListPosition = 0;
    var minListPosition = - ( (listLength - settings.visibleImage) * settings.pixelsOffset );

    $leftArrow.click(function() {

      if (currentListPosition != maxListPosition) {
          $rightArrow.removeClass('carousel--end');
          currentListPosition += +settings.pixelsOffset;
          $carouselList.animate({
            left: currentListPosition
          }, 1000);
      }

      if (currentListPosition == maxListPosition) {
          $leftArrow.addClass('carousel--end');
      }
    });

    $rightArrow.click(function() {

      if (currentListPosition != minListPosition) {
          $leftArrow.removeClass('carousel--end');
          currentListPosition -= +settings.pixelsOffset;
          $carouselList.animate({
            left: currentListPosition
          }, 1000);
      }

      if (currentListPosition == minListPosition) {
          $rightArrow.addClass('carousel--end');
      }

    });

    return this;
  }


})(jQuery)