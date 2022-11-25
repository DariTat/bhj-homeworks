let cart = document.querySelector('.cart__products');
let controls = Array.from(document.querySelectorAll('.product__quantity-control'));
let value = Array.from(document.querySelectorAll('.product__quantity-value'));
let add = Array.from(document.querySelectorAll('.product__add'))

function controlProduct(){
    let index = this.closest('.product').dataset.id - 1;
    let valueNew = Number(value[index].innerText);
    if(this.classList.contains('product__quantity-control_dec')){
        if(valueNew == 1){
            return false;
        } else {
            valueNew -= 1;
            value[index].innerText = valueNew;
        }  
    } else if(this.classList.contains('product__quantity-control_inc')){
        valueNew += 1;
        value[index].innerText = valueNew;
    }
}

function addProduct(){
    let product = this.closest('.product');
    let productClone = product.cloneNode(false);
    productClone.className = 'cart__product';
    let image = product.childNodes[3].cloneNode(true);
    image.className = 'cart__product-image';
    productClone.appendChild(image);
    let count = document.createElement('div');
    count.className = 'cart__product-count';
    let countProduct = product.querySelector('.product__quantity-value').innerText
    count.innerText = countProduct;
    productClone.appendChild(count);
    
    let elements = Array.from(cart.querySelectorAll('.cart__product'));
    if(elements.length == 0){
        cart.appendChild(productClone);
    } else if(elements.some((element) => element.dataset.id == productClone.dataset.id)){
        let element = elements.find(item => item.dataset.id == productClone.dataset.id)
        element.childNodes[1].innerText = Number(element.childNodes[1].innerText) + Number(countProduct);
    }else{
         cart.appendChild(productClone);
    }
    }

controls.forEach((control) => control.addEventListener('click', controlProduct));
add.forEach((button)=> button.addEventListener('click', addProduct) )