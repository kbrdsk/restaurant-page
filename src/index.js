import './styles/style.css';
import imageSrc from './images/test-image.jpeg';

let body = document.querySelector('body');
let testImg = () => {
	let img = new Image();
	img.src = imageSrc;
	return img;
}

body.appendChild(testImg());