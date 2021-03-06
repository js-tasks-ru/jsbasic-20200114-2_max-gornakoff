/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
'use strict';
function sumSalary(salaries) {
	let sum = 0;
	for(let key in salaries){
		if(typeof salaries[key] === 'number' && typeof salaries[key]!=='undefined'){
			sum+=salaries[key];
		} 
	}
	return sum;
}
