'use strict';
let calculator = {
	read(a,b){
	  this.a = +prompt('Введите A :');
	  this.b = +prompt('Введите B :');
  	},
	sum(){
		return this.a + this.b;
	},
	mul(){
		return this.a * this.b;
	},	
	
};

calculator.read();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
