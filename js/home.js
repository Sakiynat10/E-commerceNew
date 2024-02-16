const discountProducts = document.querySelector(".discount__products");
const newProductsRow = document.querySelector(".new__row");
const topRatingProducts = document.querySelector(".new__buy");

/* Products */
// function getDisProduct({
//   id,
//   name,
//   category,
//   description,
//   price,
//   rating,
//   discount,
//   images,
// }) {
//   return `
//   <div class="discount__product">
//     <img src=${images[0]} class=${name}>
//     <div class="card__content">
//       <div class="discount__product--price">
//         <div class="price__left">
//           <h1>${price}</h1>
//           <p>С картой</p>
//         </div>
//         <div class="price__right">
//           <h1>${price}</h1>
//           <p>Обычная</p>
//         </div>
//       </div>
//       <div class="discount__product--infos">
//         <h3 class="name__product">${name}</h3>
//       </div>
//       <p class="product__description">${description}</p>
//       <img src="../images/products/rating4.5.png" class="product__star">
//       <div class="product__btn__div">
//         <button class="korzinu">В корзину</button>
//       </div>
//     </div>
//     <div class="heart">
//       <img src="../images/index/heart.svg">
//     </div>
//     <a class="amount__dis">${discount}</a>
//   </div>
//   `;
// }

function getProductCard({
  id,
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
}) {
  let ProductInCart = cartProducts.find((pr)=> pr.id === id);
  return `
  <div class="discount__product"><img src=${images[0]} class="product__img" alt=${name}>
  <div class="card__content">
    <div class="discount__product--price">
      <div class="price__left">
        <h1>${price}</h1>
        <p>С картой</p>
      </div>
      <div class="price__right">
        <h1>${price}</h1>
        <p>Обычная</p>
      </div>
    </div>
    <div class="discount__product--infos">
      <h3 class="name__product">${name}</h3>
    </div>
    <p class="product__description">${description}</p><img
      src="../images/products/rating5.svg" class="product__star">
    <div class="product__btn__div">
      ${ProductInCart ? 
        `<div class="btn-group class" role="group">
          <button type="button" class="btn add__btn--minus btn-primary" onclick="decreaseQuantity(${id})">-</button>
          <button type="button" class="btn btn-primary btn-quantity">${ProductInCart.quantity}</button>
          <button type="button" class="btn add__btn--plus btn-primary" onclick="increaseQuantity(${id})">+</button>
      </div>`:
       `<button onclick="addToCart(${id})" class="korzinu">В корзину</button>
      `}
    </div>
  </div>
  <div class="heart"><img src=".././images/index/heart.svg" alt="image"></div><a class="amount__dis"
    style="display: none;">0</a>
</div>
  `
}

function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let discountCard = results.filter((el) => el.discount).slice(-4);

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

