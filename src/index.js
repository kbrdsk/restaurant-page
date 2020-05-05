import './styles/style.css';
import './styles/navbar.css';
import './styles/content.css';

import {Tab} from './tab.js';

let body = document.querySelector('body');

let navContainer = document.createElement('div');
navContainer.classList.add('nav-container');

let contentContainer = document.createElement('div');
contentContainer.classList.add('content-container');

let activeTab;

function activateTab(tab){
	if(activeTab) activeTab.active = false;
	tab.active = true;
	activeTab = tab;
}

let tabs = [];
for(let i = 0; i < 3; i++){
	let tab = new Tab();
	tabs.push(tab);

	tab.nav.addEventListener('click', e => activateTab(e.target.tab));

	navContainer.appendChild(tab.nav);
	contentContainer.appendChild(tab.content);
}

body.appendChild(navContainer);
body.appendChild(contentContainer);