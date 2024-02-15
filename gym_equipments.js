Shery.textAnimate(".main h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

let minPriceInput = document.getElementById('min_price')
let maxPriceInput = document.getElementById('max_price')

let checkButton = document.getElementById('btn_Check')
let totalGymEquipments = document.querySelector('.gym_equipments_products');
let footerSection = document.querySelector('.footer')
let mainSection = document.querySelector('.main')
let resetBtn = document.querySelector('.CategoryPage_Filter_Reset')



checkButton.addEventListener('click', () => {
  let minPrice = parseFloat(minPriceInput.value);
  let maxPrice = parseFloat(maxPriceInput.value);
  filterProducts(minPrice, maxPrice);
  adjustFooterHeight();
});

function updateCartCount() {
  const cartItemCount = document.getElementById('cartItemCount');
  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItemCount.textContent = totalCount;
}

resetBtn.addEventListener('click', () => {
  minPriceInput.value = '';
  maxPriceInput.value = '';

  const productsItems = totalGymEquipments.querySelectorAll('.gym_equipments_products > div');
  productsItems.forEach((item) => {
    item.style.display = 'block  '
  });

  mainSection.style.height = '220vh';
  // footerSection.style.top = '1vh';
  footerSection.style.bottom = '6vh';
  footerSection.style.zIndex = '-1';
  document.body.style.height = '205vh';
})

function filterProducts(minPrice, maxPrice) {
  const productsItems = totalGymEquipments.querySelectorAll('.gym_equipments_products > div');



  productsItems.forEach((item) => {
    let itemPriceElement = item.querySelector('[data-price]');

    if (itemPriceElement) {
      let itemPrice = parseFloat(itemPriceElement.dataset.price);

      if (itemPrice >= minPrice && itemPrice <= maxPrice) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}



function adjustFooterHeight() {
  const productsItems = totalGymEquipments.querySelectorAll('.gym_equipments_products > div');

  let visibleProducts = Array.from(productsItems).filter(item => {
    const computedStyle = getComputedStyle(item);
    return computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';
  });

  console.log('visibleProducts:', visibleProducts);

  if (visibleProducts.length > 0) {
    let numRows = Math.ceil(visibleProducts.length / 4);

    console.log('numRows:', numRows);
    console.log('visibleProducts.length:', visibleProducts.length);

    if (numRows === 1) {
      console.log('Setting height for 1 row');
      mainSection.style.height = '150vh';
      footerSection.style.bottom = '60vh';
      document.body.style.height = '150vh';
      footerSection.style.zIndex = '3 ';
    } else if (numRows === 2) {
      console.log('Setting height for 2 rows');
      mainSection.style.height = '185vh';
      footerSection.style.bottom = '30vh';
      document.body.style.height = '190vh';
      footerSection.style.zIndex = '3 ';
    } else if (numRows === 3) {
      //  footerSection.style.top = "50vh"
    }
  } else {
    console.log('Setting height for more than 2 rows');
    footerSection.style.top = '';
    footerSection.style.bottom = '15vh';
    footerSection.style.zIndex = '1';
    mainSection.style.height = '35vh';
    document.body.style.height = '50vh';
    console.log('No visible products. Check your selector or filter logic.');
  }
}


let sortDropdown = document.getElementById('sort');

sortDropdown.addEventListener('change', () => {
  let sortOption = sortDropdown.value;

  // Get all product items
  const productsItems = totalGymEquipments.querySelectorAll('.gym_equipments_products > div');

  // Convert NodeList to Array for easier sorting
  let productsArray = Array.from(productsItems);

  // Sort products based on the selected option
  if (sortOption === 'Lowtohigh') {
    productsArray.sort((a, b) => {
      let priceA = parseFloat(a.querySelector('[data-price]').dataset.price);
      let priceB = parseFloat(b.querySelector('[data-price]').dataset.price);
      return priceA - priceB;
    });
  } else if (sortOption === 'Hightolow') {
    productsArray.sort((a, b) => {
      let priceA = parseFloat(a.querySelector('[data-price]').dataset.price);
      let priceB = parseFloat(b.querySelector('[data-price]').dataset.price);
      return priceB - priceA;
    });
  }

  // Remove existing products from the container
  productsItems.forEach((item) => {
    item.remove();
  });

  // Append sorted products back to the container
  productsArray.forEach((item) => {
    totalGymEquipments.appendChild(item);
  });
});

function updateCartCount() {
  const cartItemCount = document.getElementById('cartItemCount');
  const storedCart = localStorage.getItem('cart');
  let cart = storedCart ? JSON.parse(storedCart) : [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItemCount.textContent = totalCount;
}
document.addEventListener('DOMContentLoaded', function () {
  cart = JSON.parse(localStorage.getItem('cart')) || []; 
    updateCartCount();
})