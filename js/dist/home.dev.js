"use strict";

var discountProducts = document.querySelector(".discount__products");
var newRow = document.querySelector(".new__row");
var product = [{
  name: "Г/Ц Блинчики с мясом вес, Россия",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/blinchik.png",
  discount: "-50%"
}, {
  name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/moloko.png",
  discount: "-50%"
}, {
  name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/kolbasa.png",
  discount: "-50%"
}, {
  name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/sosiska.png",
  discount: "-50%"
}];
var newProduct = [{
  name: "Г/Ц Блинчики с мясом вес, Россия",
  price: " ",
  disPrice: "44,50₽",
  img: "../images/index-images/kolbasa1.png",
  discount: ""
}, {
  name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/kolbasa.png",
  discount: " "
}, {
  name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/sosiska.png",
  discount: " "
}, {
  name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
  price: "50,50₽",
  disPrice: "44,50₽",
  img: "../images/index-images/moloko.png",
  discount: " "
}];

function getDisProduct(_ref) {
  var name = _ref.name,
      price = _ref.price,
      disPrice = _ref.disPrice,
      img = _ref.img,
      discount = _ref.discount;
  var discountProduct = document.createElement("div");
  discountProduct.className = "discount__product";
  var discountProductHeart = document.createElement("div");
  discountProductHeart.className = "heart";
  var discountProductDiscount = document.createElement("a");
  discountProductDiscount.className = "amount__dis";
  var discountProductImg = document.createElement("img");
  discountProductImg.src = img;
  var discountProductPrice = document.createElement("div");
  discountProductPrice.className = "discount__product--price";
  var discountProductInfo = document.createElement("div");
  discountProductInfo.className = "discount__product--infos";
  var discountProductRating = document.createElement("img");
  discountProductRating.src = ".././images/index-images/stars.png";
  discountProductRating.className = "product__star";
  var discountProductBtn = document.createElement("a");
  discountProductBtn.className = "korzinu";
  var discountProductHeartImg = document.createElement("img");
  discountProductHeartImg.src = ".././images/index-images/heart.svg";
  var discountProductPriceLeft = document.createElement("div");
  discountProductPriceLeft.className = "price__left";
  var discountProductPriceRight = document.createElement("div");
  discountProductPriceRight.className = "price__right";
  var discountProductPriceLeftH1 = document.createElement("h1");
  var discountProductPriceLeftP = document.createElement("p");
  var discountProductPriceRightH1 = document.createElement("h1");
  var discountProductPriceRightP = document.createElement("p");
  var discountProductInfoH3 = document.createElement("h3");
  var discountProductDiscountText = document.createTextNode(discount);
  var discountProductPriceLeftH1Text = document.createTextNode(disPrice);
  var discountProductPriceLeftPText = document.createTextNode("С картой");
  var discountProductPriceRightH1Text = document.createTextNode(price);
  var discountProductPriceRightPText = document.createTextNode("Обычная");
  var discountProductInfoH3Text = document.createTextNode(name);
  var discountProductBtnText = document.createTextNode("В корзину");
  discountProductDiscount.appendChild(discountProductDiscountText);
  discountProductPriceLeftH1.appendChild(discountProductPriceLeftH1Text);
  discountProductPriceLeftP.appendChild(discountProductPriceLeftPText);
  discountProductPriceRightH1.appendChild(discountProductPriceRightH1Text);
  discountProductPriceRightP.appendChild(discountProductPriceRightPText);
  discountProductInfoH3.appendChild(discountProductInfoH3Text);
  discountProductBtn.appendChild(discountProductBtnText);
  discountProductPriceLeft.append(discountProductPriceLeftH1, discountProductPriceLeftP);
  discountProductPriceRight.append(discountProductPriceRightH1, discountProductPriceRightP);
  discountProductInfo.appendChild(discountProductInfoH3);
  discountProductHeart.append(discountProductHeartImg);
  discountProductPrice.append(discountProductPriceLeft, discountProductPriceRight);
  discountProduct.append(discountProductHeart, discountProductDiscount, discountProductImg, discountProductPrice, discountProductInfo, discountProductRating, discountProductBtn);
  discountProducts.append(discountProduct);
  return discountProduct;
}

product.forEach(function (el) {
  discountProducts.append(getDisProduct(el));
});
newProduct.forEach(function (el) {
  newRow.append(getDisProduct(el));
});