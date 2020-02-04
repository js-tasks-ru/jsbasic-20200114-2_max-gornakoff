/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
'use strict';
function namify(users) {
	let newArr = users.map(user=>user.name);
	return newArr;
}
