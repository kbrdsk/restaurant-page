let cookingContent = document.createElement('div');

export default cookingContent;

let title = document.createElement('h3');
title.textContent = 'Some of our favorite recipes!';

let recipeListDisplay = document.createElement('ul');

let recipeList = [];

for(let i = 0; i < 4; i++){
	let recipe = document.createElement('li');
	recipe.textContent = 'Some amazing recipe';
	recipeList.push(recipe);
	recipeListDisplay.appendChild(recipe);
}

cookingContent.appendChild(title);
cookingContent.appendChild(recipeListDisplay);