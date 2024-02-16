const productsRow = document.querySelector(".discount__products");


// const productsQuantity = document.querySelector(".products-quantity");
const pagination = document.querySelector(".pagination");
let activePage = +localStorage.getItem("page") || 1;
let priceSort = "initial";


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
          <span class="btn btn-primary btn-quantity">${ProductInCart.quantity}</span>
          <button type="button" class="btn add__btn--plus btn-primary" onclick="increaseQuantity(${id})">+</button>
      </div>`:
       `<button onclick="addToCart(${id})" class="korzinu">В корзину</button>
      `}
    </div>
  </div>
  <div class="heart"><img src=".././images/index/heart.svg" alt="image"></div>
  <a class="amount__dis" style="display: none;">0</a>
</div>
  `
}

function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let pages = Math.ceil(results.length / LIMIT);

  if (pages > 1) {
    pagination.innerHTML = `<li class="page-item ${
      activePage === 1 ? "disabled" : ""
    }"><button onclick="getPage('-')" class="page-link pagination-prev">
    <img src="../images/product/double-left-arrow.svg" alt="leftArrow">
  </button></li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item"><button class="page-link ${
        i === activePage ? "active" : ""
      }" onclick="getPage(${i})">${i}</button></li>`;
    }

    pagination.innerHTML += `<li class="page-item"><button onclick="getPage('+')" class="page-link pagination-next">
    <img src="../images/product/double-right-arrow.svg" alt="rightArrow">
  </button></li>`;
  }

  let prevBtn = document.querySelector(".pagination-prev");
  let nextBtn = document.querySelector(".pagination-next");
  if (activePage === 1) {
    prevBtn.disabled = true;
  }
  if (activePage === pages) {
    nextBtn.disabled = true;
  }

  productsRow.innerHTML = " ";


  let startProduct = (activePage - 1) * LIMIT;
  let endProduct = activePage * LIMIT;

  results.slice(startProduct, endProduct).map((el) => {
    productsRow.innerHTML += getProductCard(el);
  });
}

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  localStorage.setItem("page" , activePage );
  getProducts();
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  activePage = 1;
  localStorage.setItem("page" , activePage);
  getProducts();
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

