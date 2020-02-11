/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
'use strict';
function highlight(table) {
	let tableRows = table.rows;
	let firstRow = tableRows[0];
	for(let i = 0; i < tableRows.length; i++){
		let cellsDataset = tableRows[i];
		let lastCell = cellsDataset.lastElementChild;
		let gender = lastCell.previousElementSibling;
		let age = gender.previousElementSibling;
		let lastCellsAtt = lastCell.getAttribute('data-available');
		if(lastCellsAtt==='true'){
			lastCell.parentElement.classList.add('available');
		} 
		if(lastCellsAtt==='false'){
			lastCell.parentElement.classList.add('unavailable');
		}
		if(lastCellsAtt===null){	
			lastCell.parentElement.setAttribute('hidden','');
			firstRow.removeAttribute('hidden');
		}
		if(gender.innerHTML==='m'){
			gender.parentElement.classList.add('male');
		} else {
			if(gender.innerHTML==='f'){
				gender.parentElement.classList.add('female');
			}
		}
		if(age.innerHTML < 18){
			age.parentElement.style.textDecoration = 'line-through';
		}		
	}
	

}
