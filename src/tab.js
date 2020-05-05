export class Tab {
	constructor(title = 'New Tab'){
		this._navIcon = new Image();

		this._navTitle = document.createElement('p');
		this.title = title;

		this._nav = document.createElement('div');
		this._nav.classList.add('tab-nav');
		this._nav.appendChild(this._navIcon);
		this._nav.appendChild(this._navTitle);

		this._content = document.createElement('div');
	}

	set navIcon(iconSrc){
		this._navIcon.src = iconSrc; 
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