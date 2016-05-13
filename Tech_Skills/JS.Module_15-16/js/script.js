'use strict';

$(function () {

        /**  1 часть задания **/

  var $body = $('body');
  var $searchForm = $('.search-form');
  var $searchLogo = $('.search-form__logo')
  var $searchButton = $('.search-form__search-button');
  var $searchFieldPress = $('.search-form__search-field');
  var $div = $('div');


  function search() {
    var $ul = $('<ul>');
    var $li = $('<li>');
    var $link;

    if ($('ul')) {
      $('ul').remove();
    };

    var searchRequest = $searchFieldPress.val();

    $.ajax({
      url: 'http://api.riffsy.com/v1/search?tag=' + searchRequest + '&limit=15',
      dataType: 'json'
    })
    .done(function(data) {
      $.each(data.results, function(i, val){
        $link = '<a href="'+val.url+'" title="'+val.url+'" target="_blank"><img src="' + val.itemurl + '"></a>';
        $li.append($link);                               
        $ul.append($li);
      });

      $body.append($ul);
    })
    .fail(function() {
      console.log("error");
    });

    $searchForm.css({
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
      marginLeft: '30px',
      textAlign: 'left'
    });

    $searchLogo.css({
      paddingBottom: '0',
      width: '80px'
    });

    $div.css({
      display: 'inline-block'
    });

    $searchButton.css({
      marginTop: '0'
    });
  };

  $searchButton.on('click', search);

  $searchFieldPress.keydown(function(event) {
    if ( event.keyCode == 13 ) {
      event.preventDefault();
      search();
    }
  });





        /**  2 часть задания, проверяется в консоле **/


  function Human(name, age, gender, weight, height) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
  }

  Worker.prototype = new Human();
  Student.prototype = new Human();

  function Worker(placeWork, salary) {
    this.placeWork = placeWork;
    this.salary = salary;
  }

  Worker.prototype.work = function () {
    console.log('WORK');
  }

  function Student(placeStudy, scholarship) {
    this.placeStudy = placeStudy;
    this.scholarship = scholarship;
  }

  Student.prototype.watchSerials = function () {
      console.log('Watch Serials');
  }


  var Worker1 = new Worker();
  var Student1 = new Student();

  var Worker2 = new Worker();
  var Student2 = new Student();

  var Worker3 = new Worker();
  var Student3 = new Student();  


  console.log(Worker1);
  console.log(Student1);

  console.log(Worker2);
  console.log(Student2);

  console.log(Worker2);
  console.log(Student2);

  Worker1.work();
  Student1.watchSerials();

  Worker2.work();
  Student2.watchSerials();

  Worker3.work();
  Student3.watchSerials();

});