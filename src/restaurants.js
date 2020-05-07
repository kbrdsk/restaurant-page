let restaurantContent = document.createElement('div');
restaurantContent.classList.add('takeout');

export default restaurantContent;

let elTrompudo = restaurantInfo('El Trompudo',
					address(3850,
						'San Pablo Dam Road',
						'',
						'El Sobrante',
						'CA',
						94803
					),
					'https://www.allmenus.com/ca/el-sobrante/711514-el-trompudo/menu/',
					'(877) 585-1085',
	);

let phoSaigon2 = restaurantInfo(
		'Pho Saigon Noodle & Grill',
		address(5047,
			'Appian Way',
			'',
			'El Sobrante',
			'CA',
			94803
			),
		'https://www.doordash.com/store/pho-saigon-noodle-grill-el-sobrante-90193/en-US/?utm_campaign=gpa',
		'(510) 222-2888',
	);

let restaurants = [elTrompudo, phoSaigon2];

let displayFuncs = (restaurant) => {

	return	{
			displayName: nameField(restaurant.name),
			displayAddress: addressField(restaurant.address),
			displayPhone: phoneField(restaurant.phone),
			displayWebsiteURL: websiteURLField(restaurant.websiteURL),
		};
}

for(let restaurant of restaurants){
	createDisplayableRestaurant(
		restaurant,
		restaurantDisplay(Object.keys(displayFuncs(restaurant))),
		displayFuncs(restaurant),
	);

	restaurantContent.appendChild(restaurant.display);
}






function address(number = '', street = '', suite = '', city = '', state = '', zip = ''){
	return {street, number, suite, city, state, zip};
}

function restaurantInfo(name = '', address = '', websiteURL = '', phone = ''){
	return {name, address, websiteURL, phone};
}

function restaurantDisplay (fields = ['name', 'address', 'websiteURL']){

	let createDisplay = function(displayable){
		if(displayable.type !== 'displayableRestaurant'){
			throw 'Input must be of type displayableRestaurant';
		}

		let display = document.createElement('div');
		display.classList.add('restaurant-listing');

		for(let field of fields){
			if(displayable[field]) display.appendChild(displayable[field]);
		}

		return display;
	}

	return {fields, createDisplay};
}

function addDisplay(restaurant, label, display){
	let proto = Object.create(Object.getPrototypeOf(restaurant));
	Object.setPrototypeOf(restaurant, Object.assign(proto, {[label]: display}));
}

function createDisplayableRestaurant(restaurant, display, displayFields){
	for(let field of display.fields){
		addDisplay(restaurant, field, displayFields[field]);
	}

	restaurant.type = 'displayableRestaurant';

	restaurant.display = display.createDisplay(restaurant);

	return restaurant;
}





//functions for particular display elements


function nameField(name){
	let field =  document.createElement('p');
	field.textContent = name;
	field.classList.add('restaurant-name');
	return field;
}

function addressField(address){
	let field = document.createElement('p');
	let streetLine = emptyJoin(' ', address.number, address.street);
	let suiteLine = address.suite;
	let cityLine = emptyJoin(' ',
						emptyJoin(', ', address.city, address.state),
						address.zip);
	             
	field.textContent = emptyJoin('\n', streetLine, suiteLine, cityLine);
	field.classList.add('restaurant-address');
	return field;
}

function websiteURLField(url){
	let field = document.createElement('a');
	field.setAttribute('href', url);
	field.setAttribute('target', '_blank');
	field.textContent = 'Website';
	field.classList.add('restaurant-url');
	return field;
}

function phoneField(phoneNumber){
	let field = document.createElement('p');
	field.textContent = phoneNumber;
	field.classList.add('restaurant-phone');
	return field;
}

function emptyJoin(connector, ...fields){
	return fields.filter(field => field).join(connector);
}