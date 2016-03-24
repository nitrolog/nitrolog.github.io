var testForm = {

  createTitle: function (testTitle) {
    var formTitle = document.createElement('h1');
    formTitle.className = "test-title";
    formTitle.innerHTML = testTitle;
    document.querySelector('body').appendChild(formTitle);  
  },

  createForm: function () {
    var form = document.createElement('form');
    form.className = "form";
    document.querySelector('body').appendChild(form);
  },

  createQuestion: function (questionTitle, answerArr) {
    var questionName = document.createElement('h2');
    questionName.className = "form__question-title";
    questionName.innerHTML = questionTitle;
    document.querySelector('form').appendChild(questionName);

    for (var i = 0; i < answerArr.length; i++) {
      var divCheckbox = document.createElement('div');
      var inputCheckbox = document.createElement('input');
      var checkboxLabel = document.createElement('label');

      divCheckbox.className = "form__checkbox";
      inputCheckbox.setAttribute('type', 'checkbox');
      checkboxLabel.className = "form__label";

      checkboxLabel.innerHTML = answerArr[i];

      document.querySelector('form').appendChild(divCheckbox);
      divCheckbox.appendChild(inputCheckbox);
      divCheckbox.appendChild(checkboxLabel);
    }
  },

  createCheckAnswerButton: function (answerButton) {
    var checkAnswer = document.createElement('input');

    checkAnswer.className = "form__check-answer";
    checkAnswer.setAttribute('type', 'submit');
    checkAnswer.setAttribute('value', answerButton)

    document.querySelector('form').appendChild(checkAnswer);
  }
}

testForm.createTitle('Тест по программированию');
testForm.createForm();
testForm.createQuestion('1. Вопрос №1', ['Вариант ответа №1',
                                         'Вариант ответа №2',
                                         'Вариант ответа №3']);

testForm.createQuestion('2. Вопрос №2', ['Вариант ответа №1',
                                         'Вариант ответа №2',
                                         'Вариант ответа №3']);

testForm.createQuestion('3. Вопрос №3', ['Вариант ответа №1',
                                         'Вариант ответа №2',
                                         'Вариант ответа №3']);

testForm.createCheckAnswerButton('Проверить мои результаты');