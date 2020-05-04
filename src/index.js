let body = document.querySelector('body');
let testDiv = () => {
	let div = document.createElement('div');
	div.innerText = 'But now it is saved in both places.';
	return div;
}

body.appendChild(testDiv());