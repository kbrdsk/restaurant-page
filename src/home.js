let homeContent = document.createElement('div');
homeContent.classList.add('home-content');

let title = document.createElement('h2');
title.textContent = 'Stay-Home Restaurant';

let description = document.createElement('p');
description.textContent = "Seeing as we're home for the next little while, "
					+ "let's collect some of the best places to order delivery "
					+ "from as well as some of our favorite home recipes!";


homeContent.appendChild(title);
homeContent.appendChild(description);


export default homeContent;