export class Tab {
	constructor(title = 'New Tab'){
		this._active = false;

		this._navIcon = new Image();
		this._navIcon.classList.add('nav-icon');

		this._navTitle = document.createElement('p');
		this._navTitle.classList.add('nav-title');
		this.title = title;

		this._nav = document.createElement('div');
		this._nav.classList.add('tab-nav');
		this._nav.appendChild(this._navIcon);
		this._nav.appendChild(this._navTitle);
		this._nav.tab = this;

		this._content = document.createElement('div');
		this._content.classList.add('tab-content');

		this.active = false;
	}

	set navIcon(iconSrc){
		this._navIcon.src = iconSrc; 
	}

	set active(isActive){
		this._nav.setAttribute('active', isActive);
		this._content.setAttribute('active', isActive);
		this._active = isActive;
	}

	get navIcon(){
		return this._navIcon;
	}

	set title(title){
		this._title = title;
		this._navTitle.textContent = title;
	}

	get title(){
		return this._title;
	}

	get content(){
		return this._content;
	}

	set content(div){
		this._content = div;
		this._content.classList.add('tab-content');
	}

	get nav(){
		return this._nav;
	}
}