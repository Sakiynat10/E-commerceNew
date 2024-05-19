const cartQuantity = document.querySelector(".cart-quantity");

const favouriteNumber = document.querySelector(".favourite .badge")

let cartJson = localStorage.getItem("cart");

let cartProducts = JSON.parse(cartJson)||[];

function getCartQuantity(){
  cartQuantity.textContent = cartProducts.length;
}

getCartQuantity();


/*Toggle */


/*Favourites */
let favouriteProductsJson = localStorage.getItem(FAVOURITE);
let favouriteProducts = JSON.parse(favouriteProductsJson) || [];

function getFavouriteNumber(){
  favouriteNumber.textContent = favouriteProducts.length;
}

getFavouriteNumber();