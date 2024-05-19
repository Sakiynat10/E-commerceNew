const categoryProducts = document.querySelector(".catolog");
let searchInput = document.querySelector(".search-input");
let search = "";

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
  let checkFavourite = favouriteProducts.find((el) => el.id === id);
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
  <div onclick="addToFavourite(${id})" class="heart ${checkFavourite ? 'btn-danger' : 'btn-outline-danger'}">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 211">
          <path id="Shape (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M13.2046 4.25644C14.3299 3.13067 15.8564 2.49817 17.4482 2.49817C19.0399 2.49817 20.5664 3.13063 21.6916 4.25636C22.8174 5.38164 23.45 6.90829 23.45 8.49999C23.45 10.0917 22.8175 11.6183 21.6917 12.7435C21.6917 12.7436 21.6917 12.7435 21.6917 12.7435L12.8517 21.5835C12.6565 21.7788 12.3399 21.7788 12.1446 21.5835L3.30461 12.7435C0.960963 10.3999 0.960963 6.60009 3.30461 4.25644C5.64826 1.91279 9.44807 1.91279 11.7917 4.25644L12.4982 4.96289L13.2046 4.25644C13.2046 4.25641 13.2046 4.25647 13.2046 4.25644ZM17.4482 3.49817C16.1217 3.49817 14.8496 4.02528 13.9118 4.96346L12.8517 6.02355C12.758 6.11732 12.6308 6.16999 12.4982 6.16999C12.3656 6.16999 12.2384 6.11732 12.1446 6.02355L11.0846 4.96355C9.13149 3.01042 5.96484 3.01042 4.01172 4.96355C2.05859 6.91667 2.05859 10.0833 4.01172 12.0364L12.4982 20.5229L20.9846 12.0364C21.9228 11.0987 22.45 9.82648 22.45 8.49999C22.45 7.17351 21.9229 5.90138 20.9847 4.96363C20.0469 4.02544 18.7747 3.49817 17.4482 3.49817Z" fill="#414141"/>
          </g>
      </svg>
  </div>
  <a class="amount__dis">${(discount)}</a>
</div>
  `
}

const btn = document.querySelector(".menu");
const catalogMenu = document.querySelector(".catolog__menu");

btn.addEventListener("click", function () {
  catalogMenu.classList.toggle("show-toggle");
});

function getCategoryLinks({name}) {
  return `
  <ul>
  <li>
    <a href="">${name}</a>
  </li>
  </ul>
  `
}

categories.map((el) => {
  categoryProducts.innerHTML += getCategoryLinks(el)
})

//addToFavourite
function addToFavourite(id){
  let checkFavourite = favouriteProducts.find((el) => el.id === id);
  let product = products.find((el) => el.id === id);
  if(checkFavourite){
    favouriteProducts = favouriteProducts.filter((el) => el.id !== id);
  } else{
    favouriteProducts.push(product)
  }
  localStorage.setItem(FAVOURITE , JSON.stringify(favouriteProducts));
  getProducts();
  getFavouriteNumber();
}
