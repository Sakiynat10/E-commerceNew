"use strict";

var discountProduct = document.createElement("div");
var discountProductHeart = document.createElement("div");
var discountProductDiscount = document.createElement("a");
var discountProductImg = document.createElement("img");
var discountProductPrice = document.createElement("div");
var discountProductInfo = document.createElement("div");
var discountProductRating = document.createElement("img");
var discountProductBtn = document.createElement("a");
var discountProductHeartImg = document.createElement("img");
var discountProductPriceLeft = document.createElement("div");
var discountProductPriceRight = document.createElement("div");
var discountProductPriceLeftH1 = document.createElement("h1");
var discountProductPriceLeftP = document.createElement("p");
var discountProductPriceRightH1 = document.createElement("h1");
var discountProductPriceRightP = document.createElement("p");
var discountProductInfoH3 = document.createElement("h3");
var discountProductDiscountText = document.createTextNode("-50%");
var discountProductPriceLeftH1Text = document.createTextNode("44,50 ₽");
var discountProductPriceLeftPText = document.createTextNode("С картой");
var discountProductPriceRightH1Text = document.createTextNode("50,50 ₽");
var discountProductPriceRightPText = document.createTextNode("Обычная");
var discountProductInfoH3Text = document.createTextNode("Г/Ц Блинчики с мясом вес, Россия");
var discountProductBtnText = document.createTextNode("В корзину");
discountProductDiscount.appendChild(discountProductDiscountText);
discountProductPriceLeftH1.appendChild(discountProductPriceLeftH1Text);
discountProductPriceLeftPText.appendChild(discountProductPriceLeftPText);
discountProductPriceRightH1Text.appendChild(discountProductPriceRightH1Text);
discountProductPriceRightPText.appendChild(discountProductPriceRightPText);
discountProductInfoH3Text.appendChild(discountProductInfoH3Text);
discountProductPriceLeft.append(discountProductPriceLeftH1, discountProductPriceLeftP);
discountProductPriceRight.append(discountProductPriceRightH1, discountProductPriceRightP);
discountProductHeart.appendChild(discountProductHeartImg);
discountProductPrice.append(discountProductPriceLeft, discountProductPriceRight);
discountProduct.append(discountProductHeart, discountProductDiscount, discountProductImg, discountProductPrice, discountProductInfo, discountProductRating, discountProductBtn);
console.log(discountProduct); // const discountProduct = document.createElement("div");
// discountProduct.className = "promo__card";
// const discountProductHeart = document.createElement("div");
// discountProductHeart.className = "Promo__card__img";
// const discountProductImg = document.createElement("img");
// const discountProductLikeBtn = document.createElement("button");
// const discountProductLikeBtnImg = document.createElement("img");
// const discountProductDiscount = document.createElement("span");
// const discountProductContent = document.createElement("div");
// const discountProductContentTop = document.createElement("div");
// const discountProductContentTopLeft = document.createElement("div");
// const discountProductContentTopLeftH1 = document.createElement("h1");
// const discountProductContentTopLefP1 = document.createElement("p");
// const discountProductContentTopRight = document.createElement("div");
// const discountProductContentTopLeftH2 = document.createElement("h2");
// const discountProductContentTopLefP2 = document.createElement("p");
// const discountProductContentText = document.createElement("h5");
// const discountProductRating = document.createElement("img");
// const discountProductBtnDiv = document.createElement("div");
// const discountProductBtn = document.createElement("button");
// const discountProductDiscountText = document.createTextNode("-50%");
// const discountProductContentTopLeftH1Text = document.createTextNode("44,50 ₽");
// const discountProductContentTopLefP1Text = document.createTextNode("С картой");
// const discountProductContentTopLeftH2Text = document.createTextNode("50,50 ₽");
// const discountProductContentTopLefP2text = document.createTextNode("Обычная");
// const discountProductContentTextText = document.createTextNode(
//   "Г/Ц Блинчики с мясом вес, Россия"
// );
// const discountProductBtnText = "В корзину";
// discountProductDiscount.appendChild(discountProductDiscountText);
// discountProductContentTopLeftH1.appendChild(discountProductContentTopLeftH1Text);
// discountProductContentTopLefP1.appendChild(discountProductContentTopLefP1Text);
// discountProductContentTopLeftH2.appendChild(discountProductContentTopLeftH2Text);
// discountProductContentTopLefP2.appendChild(discountProductContentTopLefP2text);
// discountProductContentText.appendChild(discountProductContentTextText);
// discountProductLikeBtn.append(discountProductLikeBtnImg);
// discountProductHeart.append(discountProductDiscount);
// discountProductHeart.append(discountProductImg, discountProductLikeBtn);
// discountProductContentTopRight.append(
//   discountProductContentTopLeftH2,
//   discountProductContentTopLefP2
// );
// discountProductContentTopLeft.append(
//   discountProductContentTopLeftH1,
//   discountProductContentTopLefP1
// );
// discountProductContentTop.append(discountProductContentTopLeft, discountProductContentTopRight);
// discountProductContent.append(
//   discountProductContentTop,
//   discountProductContentText,
//   discountProductRating,
//   discountProductBtnDiv
// );
// discountProduct.append(discountProductHeart, discountProductContent);
// console.log(discountProduct);