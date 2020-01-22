/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
'use strict';
function truncate(str, maxlength) {
	if(str.length > maxlength){
		let strBox = str.slice(0,maxlength-1);
		let strShow = strBox.substr(0)+("…");
		return strShow;
	} else {
		return str;
	}
}
