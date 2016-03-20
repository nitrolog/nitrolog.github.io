var arr = [];
var addName;

for (var i = 0; i <= 4; i++) {
  addName = prompt('Добавьте имя в базу', '');

  arr.push(addName);
}

var enterName = prompt('Введите свое имя', '');
var nameExist = false;

for (var j = 0; j < arr.length; j++) {
  
  if ( arr[j] == enterName ) {
  	nameExist = true;
  	alert( arr[j] + ', вы успешно вошли' );
  	break;
  } 
}

if (nameExist == false) {
  alert('Такого имени не существует');
}