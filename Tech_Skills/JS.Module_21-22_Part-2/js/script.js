'use strict';

$(function () {

  var questionArr = [{
    testTitle: 'Тест по программированию'
  }, {
    questionTitle: '1. Выберите правильный метод для преобразования объекта в JSON формат:',
    answerList: ['render()', 'parse()', 'stringify()', 'toJSON()'],
    inputName: 'question-1'
  }, {
    questionTitle: '2. Какой формат передачи данных наиболее распостранен?',
    answerList: ['JSON', 'XML', 'TXT', 'SQL'],
    inputName: 'question-2'
  }, {
    questionTitle: '3. Выберите правильный вариант фрагмента XML файла:',
    answerList: ['<greeting Hello, world!>', '<greeting>Hello, world!</greeting>', '<greeting>Hello, world!</>'],
    inputName: 'question-3'
  }];

  localStorage.setItem('questionStr', JSON.stringify(questionArr));

  var questionList = localStorage.getItem('questionStr');

  questionList = JSON.parse(questionList);

  /**    Создаем шаблон для проверки ответов     **/
  var correctAnswer = ['stringify()', 'JSON', '<greeting>Hello, world!</greeting>'];
  var checkCorrectAnswer = [];

  var $content = _.template($('#template').html());
  var $body = $('body');
  var $modal = void 0;
  var $overlay = void 0;
  var $closeX = void 0;
  var $closeButton = void 0;
  var $checkAnswerButton = void 0;

  $body.append($content({ list: questionList }));

  $checkAnswerButton = $('.form__check-answer');

  function showModal(e) {
    e.preventDefault();

    /**   ВЫБИРАЕМ ВСЕ ОТМЕЧЕННЫЕ ОТВЕТЫ  **/
    var $userAnswerCollect = $("input:radio:checked").parent('label');

    /**    ДОБАВЛЯЕМ ИХ В МАССИВ    **/
    $userAnswerCollect.map(function () {
      return checkCorrectAnswer.push($(this).text());
    });

    /**    ПРОВЕРЯЕМ ПОЛУЧЕННЫЙ МАССИВ С ШАБЛОНОМ И ВЫДАЕМ РЕЗУЛЬТАТ, КОТОРЫЙ ПЕРЕДАЕТСЯ В DOM   **/
    var testResult = function testResult() {
      if (JSON.stringify(correctAnswer) == JSON.stringify(checkCorrectAnswer)) {
        return "Тест пройден";
      } else {
        return "Тест провален";
      }
    };

    $overlay = $('<div class="modal-overlay"></div>');
    $modal = $('<div class="modal">' + '<button type="button" class="closeX">&times;</button>' + '<p class="modal__message">' + testResult() + '</p>' + '<button type="button" class="close-button">Close</button>' + '</div>');

    $body.append($overlay);
    $body.append($modal);

    $closeX = $('.closeX');
    $closeButton = $('.close-button');

    $modal.fadeIn(1000);

    $overlay.one('click', hideModal);
    $closeX.one('click', hideModal);
    $closeButton.one('click', hideModal);
  }

  function hideModal() {
    $modal.remove();
    $overlay.remove();
    $('input:radio').prop('checked', false);
    checkCorrectAnswer = [];
  }

  $checkAnswerButton.on('click', showModal);
});
