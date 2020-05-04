import './style.css';

let body = document.querySelector('body');
let testDiv = () => {
	let div = document.createElement('div');
	div.innerText = 'Still working?';
	return div;
}

body.appendChild(testDiv());