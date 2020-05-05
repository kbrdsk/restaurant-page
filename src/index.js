import './styles/style.css';
import {Tab} from './tab.js';

let body = document.querySelector('body');

let navContainer = document.createElement('div');
navContainer.classList.add('nav-container');

let contentContainer = document.createElement('div');
contentContainer.classList.add('content-container');

for(let i = 0; i < 3; i++){
	navContainer.appendChild((new Tab()).nav);
}


body.appendChild(navContainer);
body.appendChild(contentContainer);