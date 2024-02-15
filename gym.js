// import LocomotiveScroll from 'locomotive-scroll';
let productContainer = document.querySelector('.products_grid')
let hiddenContainer = document.querySelector('.hidden_products');
let ProductSection = document.querySelector('.products');

let viewAllBtn = document.querySelector('.viewAll a');
let hiddenPriceContainer = document.querySelector('.hidden_Price')
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

document.addEventListener('DOMContentLoaded', function(){    
    viewAllBtn.addEventListener('click', function(e){
            e.preventDefault()
            toggleProductContainer();
            viewAllBtn.style.display ='none';
            toggleHiddenPriceContainer();
            // adjustOverlayHeight();
            overlay.style.display='block'
            overlay.style.height = '740vh'

        } );
      
});

function toggleProductContainer(){
    productContainer.classList.toggle('expanded');
    hiddenContainer.classList.toggle('show-hidden_products');
    adjustGridColumns();
    adjustProductContainer();
   
    // toggleViewAll();
}

function adjustGridColumns(){
    let numberOfProduct = productContainer.children.length;
    let colms = Math.ceil(numberOfProduct / 4);
    productContainer.style.gridTempletColumns ='repeat (' +colms +'), 21vw'
}

function adjustProductContainer(){
    let HiddenProductVisible = hiddenContainer.classList.contains('show-hidden_products');
    let productsHeight = HiddenProductVisible ? 200 : 80;
    ProductSection.style.height = productsHeight + 'vh';
}

function toggleHiddenPriceContainer(){
    hiddenPriceContainer.classList.toggle('show-hidden_Price')
}



// function toggleViewAll() {
    // let isAllProductsVisible = productContainer.children.length === hiddenContainer.children.length;
    // viewAllBtn.style.display = isAllProductsVisible ? 'none' : 'block';
    
// 
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  Shery.textAnimate(".nav h1 span" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


// ********************************** code for gym equipment ***********************************

const Products={
    "product1" :{
        productName : "Exercise Cycle",
        quantity : 1,
        price: 146
    },
    "product2" :{
        productName : "Treadmill",
        // quantity : 1,
        price: 204
    },
    "product3" :{
        productName : "Adjustable Dumbell",
        // quantity : 1,
        price: 324
    },
    "product4" :{
        productName : "Weight Bench",
        // "quantity" : 1,
        price: 43
    },
    "product5" :{
        productName : "Resistance Band",
        // "quantity" : 1,
        price:3
    },
    "product6" :{
        productName : "Weighted Vest",
        // "quantity" : 1,
        price: 46
    },
"product7" :{
        productName : "Yoga Mat",
        // "quantity" : 1,
        price: 10
    },
    "product8" :{
        productName : "4KG Kettlebells for Weightlifting",
        // "quantity" : 1,
        price: 6
    },
    "product9" :{
        productName : "5KG Dumbell",
        // quantity : 1,
        price: 20
    },
    "product10" :{
        productName : "AB Roller",
        // "quantity" : 1,
        price: 4
    },
    "product11" :{
        productName : "Hand Gripper",
        // "quantity" : 1,
        price:3
    },
    "product12" :{
        productName : "Wrist Wrap/Strap",
        // "quantity" : 1,
        price: 12
    },
}
const productString = JSON.stringify(Products);
localStorage.setItem("Products", productString);
const products = JSON.parse(productString);