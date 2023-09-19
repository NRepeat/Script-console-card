function setDivWidth() {
	const screenWidth = window.innerWidth;
	let widthStyle;
	let heightStyle;
	let mainDivStyles;

	if (screenWidth >= 1200) {
		widthStyle = "width: calc(50%);";
		heightStyle = "height: 667px;";
	} else if (screenWidth >= 768) {
		widthStyle = "width: calc(65%);";
		heightStyle = "height: 557px;";
	} else {

		widthStyle = "width: calc(100%);";
		heightStyle = "height: 350px;";
	}

	mainDivStyles = `
    flex-grow: 1;
    padding: 1rem;
    box-shadow: 1px 1px 5px 5px #f1f1f1;
    border-radius: 10px;
    background: #fff;
    ${widthStyle} ${heightStyle}
    color: #000000;
    text-align: center;
    box-sizing: border-box;
    margin: 1rem 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

	const divElement = document.getElementById("adaptiveDiv");

	if (divElement) {
		divElement.style.cssText = mainDivStyles;
	}
}

const divElement = document.createElement('div');
divElement.id = "adaptiveDiv";

const productImage = document.createElement('img');
productImage.src = 'PRODUCT_IMAGE_URL';
productImage.alt = 'Product Name';

const productName = document.createElement('h2');
productName.textContent = 'Product Name';

const productPrice = document.createElement('p');
productPrice.textContent = 'Price: $100';


const buyButton = document.createElement('button');
buyButton.textContent = 'Buy';
buyButton.style.backgroundColor = '#000';
buyButton.style.color = '#fff';

divElement.appendChild(productImage);
divElement.appendChild(productName);
divElement.appendChild(productPrice);
divElement.appendChild(buyButton);

const targetElement = document.getElementById("product_category_18545_0");
if (targetElement) {
	targetElement.parentNode.insertBefore(divElement, targetElement.nextSibling);
} else {
	console.log('Target element not found.');
}

setDivWidth();

window.addEventListener('resize', setDivWidth);
