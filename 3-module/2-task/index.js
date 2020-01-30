/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
'use strict';
function getMinMax(str) {
	let word = '';
	for(let ch of str){
		word = word + ch.replace(',',' ');
		}
	let myArray = word.split(' ');
	let newArr = myArray.filter(Boolean).map(item=>+item);
	newArr = newArr.filter(Number);
	let minV = Math.min.apply(null, newArr);
	let maxV = Math.max.apply(null, newArr);
	let minMax={
				min:minV,
				max:maxV,
			};
				
	return minMax;
}

