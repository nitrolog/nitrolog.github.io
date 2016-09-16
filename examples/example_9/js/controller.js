define(
  'controller',
  ['jquery',
   'model',
   'view'],
  function ($, model, view) {

    return function Controller(model, view) {
      var self = this;
      var index = 99999999999999;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item-list__edit-item', editItem);
      view.elements.applyBtn.on('click', applyItem);
      view.elements.listContainer.on('click', '.item-list__delete-button', removeItem);

      function addItem() {
        var newItem = view.elements.input.val();

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function editItem() {
        var editItemValue = $(this).attr('data-value');

        index = model.data.indexOf(editItemValue);
        view.elements.input.val(editItemValue);
        
        return index;    
      }

      function applyItem() {
        var editItem = view.elements.input.val();

        model.applyItem(index, editItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
      }

    };
  }
);