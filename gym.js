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
    
// }
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
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
