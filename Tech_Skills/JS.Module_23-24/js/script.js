require.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.12.0.min',
    'template': 'template'
  },
});



require (
  [
    'model',
    'view',
    'controller',
    'jquery',
    'template'
  ],

  function (Model, View, Controller, $, tmpl) {
    $(function () {
      var toDoList = ['item 1', 'item 2', 'item 3'];
      var model = new Model(toDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    })
  }
);