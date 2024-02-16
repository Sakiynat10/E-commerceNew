let cartProductsRow = document.querySelector(".cart-products");

function getCartProductsCard({images, name, id, quantity}) {
    return `
<div class='cart'>
  <input class="cart__input" type="checkbox" />
  <img src="${images[0]}" alt="${name}" />
  <div class="cart__info">
    <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
    <div class="cart__price">
      <div class="cart-price--left">
        <h3 class="price__left--title">44,50 ₽</h3>
        <p class="price__left--subtitle">С картой</p>
      </div>
      <div class="cart-price--right">
        <h3 class="price__right--title">44,50 ₽</h3>
        <p class="price__right--subtitle">Обычная</p>
      </div>
      <p class="inf">за шт.</p>
      <span class="cart__discount">-10%</span>
    </div>
  </div>
  <div class="cart__plusminus">
    <div class="plusminus__btn">
      <button class="minus" onclick="decreaseQuantity(${id})">
        -
      </button>
      <span class="quantity">${quantity}</span>
      <button class="plus" onclick="increaseQuantity(${id})">
        +
      </button>
    </div>
    <div class="plusminus__price">
      <h2>89,00 ₽</h2>
      <h4>89,00 ₽</h4>
    </div>
  </div>
</div>
    `;
}

function getCartsProduct() {
    cartProductsRow.innerHTML = "";
    cartProducts.map((pr) => {
        cartProductsRow.innerHTML += getCartProductsCard(pr);
    });
}
getCartsProduct();

function increaseQuantity(id) {
    cartProducts = cartProducts.map((pr) => {
        if (pr.id === id) {
            pr.quantity++;
        }
        return pr;
    });
    getCartQuantity();
    getCartsProduct();
    localStorage.setItem("cart", JSON.stringify(cartProducts));
}

function decreaseQuantity(id) {
    let productsInCart = cartProducts.find((pr) => pr.id === id);
    if (productsInCart.quantity === 1) {
        cartProducts = cartProducts.filter((pr) => pr.id !== id);
    } else {
        cartProducts = cartProducts.map((pr) => {
            if (pr.id === id) {
                pr.quantity--;
            }
            return pr;
        });
    }
getCartQuantity();
    getCartsProduct();
    localStorage.setItem("cart", JSON.stringify(cartProducts));
}