/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
'use strict';
function ucFirst(str) {
	if (str === ''){
		return str;
	} else {
		return str[0].toUpperCase() + str.substring(1);
	}
	
}