function changeCheck(el) {

  var el = el,
    input = el.find("input").eq(0);
      
  if(el.attr("class").indexOf("checkbox__jquery--disabled")==-1)
  { 
      if(!input.attr("checked")) {
      el.addClass("checkbox__jquery--checked");
      input.attr("checked", true);
    } else {
      el.removeClass("checkbox__jquery--checked");
      input.attr("checked", false).focus();
    }
  }
  
    return true;
}

function changeVisualCheck(input) {

  var wrapInput = input.parent();
  
  if(!input.attr("checked")) {
    wrapInput.removeClass("checkbox__jquery--checked");
  } else {
    wrapInput.addClass("checkbox__jquery--checked");
  }
}

function changeCheckStart(el) {

  try {

    var el = el,
      checkName = el.attr("name"),
      checkId = el.attr("id"),
      checkChecked = el.attr("checked"),
      checkDisabled = el.attr("disabled"),
      checkTab = el.attr("tabindex"),
        checkValue = el.attr("value");
      if(checkChecked)
        el.after("<span class='checkbox__jquery checkbox__jquery--checked'>"+
          "<input type='checkbox'"+
          "name='"+checkName+"'"+
          "id='"+checkId+"'"+
          "checked='"+checkChecked+"'"+
                "value='"+checkValue+"'"+
          "tabindex='"+checkTab+"' /></span>");
      else
        el.after("<span class='checkbox__jquery'>"+
          "<input type='checkbox'"+
          "name='"+checkName+"'"+
          "id='"+checkId+"'"+
                 "value='"+checkValue+"'"+
          "tabindex='"+checkTab+"' /></span>");
      
      if(checkDisabled)
      {
        el.next().addClass("checkbox__jquery--disabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
      }
      
      /* цепляем обработчики стилизированным checkbox */    
      el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
      el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
      if(jQuery.browser.msie)
      {
        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) }); 
      }
      el.remove();
  }
catch(e) {}

    return true;
}
