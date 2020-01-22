/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
'use strict';
function checkSpam(str) {
	let toLower = str.toLowerCase();
	if(toLower.includes('1xbet') === true || toLower.includes('xxx') === true){
		return true;
	} else {
		return false;
	}
}
