define(
  'view',
  ['jquery',
   'model'],
  function ($, model) {
   
    return function View(model) {
      var self = this;

      function init() {
        var wrapper = tmpl($('#template').html());

        $('body').append(wrapper);

        self.elements = {
          input: $('.controlls__input-value'),
          addBtn: $('.controlls__add-item'),
          applyBtn: $('.controlls__apply-item'),
          listContainer: $('.item-list')
        };

        self.renderList(model.data);
      };

      self.renderList = function (data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
      };

      init();
    }
  }
);