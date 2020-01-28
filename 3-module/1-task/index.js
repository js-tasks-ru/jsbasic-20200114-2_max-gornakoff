/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
'use strict';
function showSalary(data, age) {
	const namesBalance = data
	.filter((user)=>{
		return user.age <= age;
	})
	.map((user)=>{
		return [user.name,user.balance].join(' ');		
	});
return namesBalance.join('\n');
}