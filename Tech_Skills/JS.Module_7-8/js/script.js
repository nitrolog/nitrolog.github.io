$(function () {

      //    UNIVERSAL  TAB-script

  var $switchTab = $('.tab-menu a');
  var $switchTabText = $('.tab-text .tab');

  $('.tab-menu li:first-child a').addClass('tab-menu__link--active tab-menu__link--active-hover');
  $('.tab-text p:first-child').addClass('active');

  $switchTab.hover(
    function () {
      $(this).addClass('tab-menu__link--hover');
    }, function () {
      $(this).removeClass('tab-menu__link--hover');
    }
  );

  $switchTab.click(function () {
    $switchTab.removeClass('tab-menu__link--active tab-menu__link--active-hover');
    $(this).addClass('tab-menu__link--active tab-menu__link--active-hover');
    $switchTabText.removeClass('active').eq($switchTab.index(this)).addClass('active');
  });





      //    UNIVERSAL  Tooltip-script

  var $inputField = $('.form-container input');
  var $tooltip = $('.tooltip');
  var $helpButton = $('.help-button');

  $inputField.hover(
    function () {
      $tooltip.eq($inputField.index(this)).addClass('visible-tooltip');
    }, function () {
      $tooltip.removeClass('visible-tooltip');
    }
  );

  $helpButton.click(function () {
    $tooltip.addClass('visible-tooltip');
  });
});