"use strict";

var discountProduct = document.querySelector(".discount__product");
var products = [{
  img1: "img1",
  discount: "-50%",
  img2: "img2",
  priceLeftH1: "44,50 ₽",
  priceLeftP: "С картой",
  priceRightH1: "44,50 ₽",
  priceRightP: "С картой",
  infosH3: "Г/Ц Блинчики с мясом вес, Россия",
  img3: "img3",
  korzinu: "В корзину"
}];

function getProductCard(_ref) {
  var img1 = _ref.img1,
      discount = _ref.discount,
      img2 = _ref.img2,
      priceLeftH1 = _ref.priceLeftH1,
      priceLeftP = _ref.priceLeftP,
      priceRightH1 = _ref.priceRightH1,
      priceRightP = _ref.priceRightP,
      infosH3 = _ref.infosH3,
      img3 = _ref.img3,
      korzinu = _ref.korzinu;
  var discountProduct = document.createElement("div");
  discountProduct.className = "discount__product";
  var heartProduct = document.createElement("div");
  heartProduct.className = "heart";
  var ProductImg1 = document.createElement("img");
  ProductImg1.src = img1;
  var discountAmount = document.createElement("a");
  discountAmount.className = discount;
  var ProductImg2 = document.createElement("img");
  ProductImg2.src = img2;
  var discountProductPrice = document.createElement("div");
  discountProductPrice.className = "discount__product--price";
  var discountProductPriceLeft = document.createElement("div");
  discountProductPriceLeft.className = "price__left";
  var discountProductPriceLeftH1 = document.createElement("h1");
  discountProductPriceLeftH1.className = priceLeftH1;
  var discountProductPriceLeftP = document.createElement("div");
  discountProductPriceLeftP.className = priceLeftP;
  var discountProductPriceRight = document.createElement("div");
  discountProductPriceRight.className = "price__right";
  var discountProductPriceRightH1 = document.createElement("h1");
  discountProductPriceRightH1.className = priceRightH1;
  var discountProductPriceRightP = document.createElement("div");
  discountProductPriceRightP.className = priceRightP;
  var discountProductInfos = document.createElement("div");
  discountProductInfos.className = "discount__product--infos";
  var discountProductInfosH3 = document.createElement("div");
  discountProductInfosH3.className = infosH3;
  var ProductImg3 = document.createElement("div");
  ProductImg3.src = img3;
  var discountProductLink = document.createElement("div");
  discountProductLink.className = korzinu;
}