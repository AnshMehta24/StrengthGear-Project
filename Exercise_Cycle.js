let input = document.querySelector('#input_field')
let cart = []
let totalAmount = 0;
let addCart = document.querySelector('.addToCart')

document.addEventListener('DOMContentLoaded', function () {
    let plusBtn = document.querySelector('.quantity-plus')
    let minusBtn = document.querySelector('.quantity-minus')

    plusBtn.addEventListener('click', function () {
        increment();
    })
    minusBtn.addEventListener('click', function () {
        decrement();
    })

    // addCart.addEventListener('click', () => {
    //     addtoCart("Electric Cycle", 146, parseInt(input.value));
    // })
    addCart.addEventListener('click', () => {
        const productName = "Electric Cycle";
        const price = 146;
        const quantity = parseInt(input.value);
      
        addtoCart(productName, price, quantity);
        // redirectToCart(); // Optional: Redirect to cart page directly
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
// function updateCartCount() {
    
//     const cartItemCount = document.getElementById('cartItemCount');
//     const storedCart = localStorage.getItem('cart');
//     const cart = storedCart ? JSON.parse(storedCart) : [];
//     const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//     cartItemCount.textContent = totalCount;
//   }

function updateCartCount() {
    const cartItemCount = document.getElementById('cartItemCount');
    let totalCount = 0;
    for (const item of cart) {
        totalCount += item.quantity;
    }
    cartItemCount.textContent = totalCount;
}

// function updateCartCount() {
//     const cartItemCount = document.getElementById('cartItemCount');
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//     cartItemCount.textContent = totalCount;
// }

function addtoCart(productName, price, quantity) {
    console.log("Adding to cart:", productName, price, quantity);
  
    const existingItem = cart.find(item => item.productName === productName);
 
  if (existingItem) {
      existingItem.quantity += quantity;
    } else {
        cart.push({ productName, price, quantity });
       
    }
  
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage
    updateCartCount();
    updateTotalAmount();
  }
  

// function updateCartCount() {
//     const cartItemCount = document.getElementById('cartItemCount')
//     cartItemCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
// }

// function redirectToCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     window.location.href = 'cart.html';
// }

function updateTotalAmount() {
    let totalAmount = 0;
    for (const item of cart) {
        totalAmount += item.price * item.quantity;
    }
    console.log("Total Amount:", totalAmount); // Debugging statement
}
