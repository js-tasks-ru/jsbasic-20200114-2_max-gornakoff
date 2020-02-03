/**
 * @param {string} str
 * @returns {string}
 */
'use strict';
function camelize(str) {
	let strArr = []
	strArr = str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
	console.log(strArr);
	return strArr;
}
