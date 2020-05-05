import './styles/style.css';
import './styles/navbar.css';
import './styles/content.css';

import homeIcon from './images/home.svg';
import restaurantIcon from './images/restaurant.svg';
import chefIcon from './images/chef.svg';


import {Tab} from './tab.js';

let main = document.querySelector('main');
let header = document.querySelector('header');

let pageTitle = document.createElement('p');
pageTitle.classList.add('page-title');
pageTitle.textContent = '';
header.appendChild(pageTitle);

let navContainer = document.createElement('div');
navContainer.classList.add('nav-container');

let contentContainer = document.createElement('div');
contentContainer.classList.add('content-container');


let activeTab;
let tabs = [];
let tabSettings = [{icon: homeIcon, title: 'Home'},
				   {icon: restaurantIcon, title: 'Restaurants'},
				   {icon: chefIcon, title: 'Cooking'},
				   ];

for(let i = 0; i < 3; i++){
	let tab = new Tab();
	tabs.push(tab);

	if(i === 0) activateTab(tab);
	tab.navIcon = tabSettings[i].icon;
	tab.title = tabSettings[i].title;
	tab.nav.addEventListener('click', () => activateTab(tab));

	navContainer.appendChild(tab.nav);
	contentContainer.appendChild(tab.content);
}

main.appendChild(navContainer);
main.appendChild(contentContainer);



function activateTab(tab){
	if(activeTab) activeTab.active = false;
	tab.active = true;
	activeTab = tab;
}