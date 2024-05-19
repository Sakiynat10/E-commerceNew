const discountProducts = document.querySelector(".discount__products");
const newProductsRow = document.querySelector(".new__row");
const topRatingProducts = document.querySelector(".new__buy");



function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let discountCard = results.filter((el) => el.discount !== (0 + "%")).slice(-4);

  discountProducts.innerHTML = "";

  discountCard.forEach((el) => {
    discountProducts.innerHTML += getProductCard(el);
  });

  let newCard = results.slice(-4);

  newProductsRow.innerHTML = "";

  newCard.forEach((el) => {
    newProductsRow.innerHTML += getProductCard(el);
  });

  let newBuy = results.toSorted((a, b) => a.rating - b.rating).slice(-4);

  topRatingProducts.innerHTML = "";

  newBuy.forEach((el) => {
    topRatingProducts.innerHTML += getProductCard(el);
  });
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

/*Tab Content */
const tabButtons = document.querySelectorAll(".btn__map");
const tabContents = document.querySelectorAll(".tab-content");
let active = 0;

function getTabContents() {  
  tabContents.forEach((el, i) => {
    if (active !== i) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  });
}

getTabContents();

tabButtons.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i;
    getTabContents();
  });
});

function addToCart(id){
  let productFound = products.find((pr) => pr.id === id);
  let ProductInCart = cartProducts.find((pr) => pr.id === id);

  if(ProductInCart){
    cartProducts = cartProducts.map((pr) => {
      if(pr.id === id){
        pr.quantity++;
      }
      return pr;
    })
  }else{
    productFound.quantity = 1;
    cartProducts.push(productFound);
  }
  getCartQuantity();
  getProducts();
  localStorage.setItem("cart" , JSON.stringify(cartProducts));
}


function increaseQuantity(id){
  cartProducts = cartProducts.map((pr) => {
    if(pr.id === id){
      pr.quantity++;
    }
    return pr;
  });
  getProducts();
  getCartQuantity();
  localStorage.setItem("cart" , JSON.stringify(cartProducts));
}

function decreaseQuantity(id) {
  let productsInCart = cartProducts.find((pr)=> pr.id === id);
  if(productsInCart.quantity === 1){
    cartProducts = cartProducts.filter((pr)=> pr.id !==id);
  }else{
    cartProducts = cartProducts.map((pr) => {
      if(pr.id === id){
        pr.quantity--;
      }
      return pr;
    });
  }
  
  getProducts();
  getCartQuantity();
  localStorage.setItem( "cart", JSON.stringify(cartProducts));
}

