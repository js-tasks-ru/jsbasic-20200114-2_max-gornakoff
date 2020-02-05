/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
let arr = friends.map(item=>item.firstName + ' ' + item.lastName);
let items = document.createElement('ul');

for(let i = 0; i < arr.length; i++){
	
	let item = document.createElement('li');
	item.innerHTML = arr[i];
	items.append(item);
}
return items;
}
