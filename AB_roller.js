let input = document.querySelector('#input_field')
let cart = []
let totalAmount = 0;
let addCart = document.querySelector('.addToCart')
const Products= JSON.parse(window.localStorage.getItem("Products"));
console.log(Products);
document.addEventListener('DOMContentLoaded', function () {
    let plusBtn = document.querySelector('.quantity-plus')
    let minusBtn = document.querySelector('.quantity-minus')
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
    updateCartCount();
    plusBtn.addEventListener('click', function () {
        increment();
    })
    minusBtn.addEventListener('click', function () {
        decrement();
    })

    addCart.addEventListener('click', () => {
       
            const product = Products.product10;
            const quantity = parseInt(input.value);
            addtoCart(product.productName, product.price, quantity);
       
    
      });
      

})


function increment() {
    let currentValue = parseInt(input.value)

    input.value = currentValue + 1;
}
function decrement() {
    let currentValue = parseInt(input.value)
    if (currentValue > 1) {
        input.value = currentValue - 1;
    } else {
        alert(`You have to buy minimum ${currentValue} quantity of this item `)
    }
}


function updateCartCount() {
    const cartItemCount = document.getElementById('cartItemCount');
    let totalCount = 0;
    for (const item of cart) {
        totalCount += item.quantity;
    }
    cartItemCount.textContent = totalCount;
}


function addtoCart(productName, price, quantity) {
 
  
    const existingItem = cart.find(item => item.productName === productName);
 
  if (existingItem) {
      existingItem.quantity += quantity;
    } else {
        // cart.push(Products.product1);
        cart.push({ productName, price, quantity });
    }
   localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage
    updateCartCount();
    updateTotalAmount();
  }

function updateTotalAmount() {
    let totalAmount = 0;
    for (const item of cart) {
        totalAmount += item.price * item.quantity;
    }
   
}
