// Clase Product para instrumentos quirúrgicos
class Product {
    constructor(name, price, source) {
        this.name = name;
        this.price = price;
        this.source = source;
    }
    
    // Método para formatear el precio
    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
    
    // Método para mostrar información del producto
    displayInfo() {
        return `${this.name} - ${this.getFormattedPrice()}`;
    }
}

// Función para generar un precio aleatorio entre 10 y 100
function generateRandomPrice() {
    return (Math.random() * 90 + 10).toFixed(2);
}
const surgicalInstruments = [
    new Product("Bisturí #10", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #11", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #15", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #20", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #21", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #22", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #23", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Bisturí #24", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Escalpelo Quirúrgico", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Mayo", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Metzenbaum", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg"),
    new Product("Tijeras de Iris", generateRandomPrice(), "servimed.imgs/servimed-logo.jpg")
];


function displayProducts(productsList) {
    
    productsContainer.innerHTML = '';
    
    if (productsList.length === 0) {
        console.log('la lista esta vacia');
        return;
    }
    productsList.forEach((product) => {
        const productToappend = document.createElement('div');
        const productToappendImgContainer = document.createElement('div');
        const productToappendImg = document.createElement('img');
        const productToappendText = document.createElement('div');
        const productToappendH3 = document.createElement('h3');
        const productToappendH4 = document.createElement('h4');
        const productToappendspan = document.createElement('span');
        productToappend.className = 'container-product';
        productToappend.id = product.name;
        productToappendImgContainer.className = 'product-img-container';
        productToappendText.className = 'product-text';
        productToappendH3.className = 'product-name';
        productToappendH4.className = 'product-price';
        productToappendspan.className = 'price';
        productToappendImg.src = 'servimed.imgs/servimed-logo.jpg';
        productToappendH3.textContent = product.name;
        productToappendH4.textContent = 'precio: ',
        productToappendspan.textContent = `${product.price}$`;
        
        productToappendImgContainer.appendChild(productToappendImg);
        productToappend.appendChild(productToappendImgContainer);
        productToappendH4.appendChild(productToappendspan);
        productToappendText.appendChild(productToappendH3);
        productToappendText.appendChild(productToappendH4);
        productToappend.appendChild(productToappendText);
        
        productsContainer.appendChild(productToappend);
    });
}
const productsContainer = document.getElementById('products-container');
const viewMoreButton = document.getElementById('view-more-button');
const viewCatalogButton = document.getElementById('view-catalog');
let productContainerWidthOnPixels = productsContainer.style.width;
console.log(productContainerWidthOnPixels);
viewCatalogButton.style.display = 'none';
let viewMoreButtonBool = false;
displayProducts(surgicalInstruments.slice(0, -8));
viewMoreButton.addEventListener('click', event=> {
    if (viewMoreButtonBool) {
        displayProducts(surgicalInstruments.slice(0, -8));
        viewMoreButton.textContent = 'Ver mas';
        viewCatalogButton.style.display = 'none';
        viewMoreButtonBool = false;
        return;
    } else {
        displayProducts(surgicalInstruments);
        viewMoreButton.textContent = 'Ver menos';
        viewCatalogButton.style.display = 'block';
        viewMoreButtonBool = true;
        return;
    }
});
