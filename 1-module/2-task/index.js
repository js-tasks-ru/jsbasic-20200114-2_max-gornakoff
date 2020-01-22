/**
 * Эту функцию трогать не нужно
 */
'use strict';
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
	if (name !== undefined && name.includes(' ') === false && name.length >= 4) {
		 return true;
	} else { 
		return false;
	}
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}