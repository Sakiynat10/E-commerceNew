const cartQuantity = document.querySelector(".cart-quantity");

let cartJson = localStorage.getItem("cart");

let cartProducts = JSON.parse(cartJson)||[];

function getCartQuantity(){
  cartQuantity.textContent = cartProducts.length;
}

getCartQuantity();


/*Toggle */





