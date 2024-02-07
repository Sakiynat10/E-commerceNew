const discountProducts = document.querySelector(".discount__products");
const newRow = document.querySelector(".new__row");
const newBuys = document.querySelector(".new__buy");
const searchInput = document.querySelector(".search-input");
const search = " ";

function getDisProduct({
  id,
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
}) {
  const discountProduct = document.createElement("div");
  const discountProductContent = document.createElement("div");
  discountProductContent.className = "card__content";
  discountProduct.className = "discount__product";
  const discountProductHeart = document.createElement("div");
  discountProductHeart.className = "heart";
  const discountProductDiscount = document.createElement("a");
  discountProductDiscount.className = "amount__dis";
  const discountProductImg = document.createElement("img");
  discountProductImg.src = images[0];
  discountProductImg.className = "product__img";
  const discountProductPrice = document.createElement("div");
  discountProductPrice.className = "discount__product--price";
  const discountProductInfo = document.createElement("div");
  discountProductInfo.className = "discount__product--infos";
  const discountProductRating = document.createElement("img");
  discountProductRating.src = ".././images/index-images/stars.png";
  discountProductRating.className = "product__star";
  const discountProductBtnDiv = document.createElement("div");
  discountProductBtnDiv.className = "product__btn__div";
  const discountProductBtn = document.createElement("button");
  discountProductBtn.className = "korzinu";
  const discountProductHeartImg = document.createElement("img");
  discountProductHeartImg.src = "../images/index-images/heart.svg";
  const discountProductPriceLeft = document.createElement("div");
  discountProductPriceLeft.className = "price__left";
  const discountProductPriceRight = document.createElement("div");
  discountProductPriceRight.className = "price__right";
  const discountProductPriceLeftH1 = document.createElement("h1");
  const discountProductPriceLeftP = document.createElement("p");
  const discountProductPriceRightH1 = document.createElement("h1");
  const discountProductPriceRightP = document.createElement("p");
  const discountProductInfoH3 = document.createElement("h3");
  discountProductInfoH3.className = "name__product";
  const discountProductDescription = document.createElement("p");
  discountProductDescription.className = "product__description";

  const discountProductDiscountText = document.createTextNode(discount);
  const discountProductPriceLeftH1Text = document.createTextNode(price);
  const discountProductPriceLeftPText = document.createTextNode("С картой");
  const discountProductPriceRightH1Text = document.createTextNode(price);
  const discountProductPriceRightPText = document.createTextNode("Обычная");
  const discountProductInfoH3Text = document.createTextNode(name);
  const discountProductBtnText = document.createTextNode("В корзину");

  discountProductDescription.textContent = description;

  if (rating == 5) {
    discountProductRating.src = "../images/products/rating5.svg";
  }else if(rating == 4.5){
    discountProductRating.src = "../images/products/rating4.5.png";
  }else if(rating == 4){
    discountProductRating.src = "../images/products/rating3.png";
  }else if(rating == 3){
    discountProductRating.src = "../images/products/rating3.svg";
  }else if(rating == 2){
    discountProductRating.src = "../images/products/rating2.png";
  }else if(rating == 1){
    discountProductRating.src = "../images/products/rating2.png";
  }
  discountProductDiscount.appendChild(discountProductDiscountText);
  discountProductPriceLeftH1.appendChild(discountProductPriceLeftH1Text);
  discountProductPriceLeftP.appendChild(discountProductPriceLeftPText);
  discountProductPriceRightH1.appendChild(discountProductPriceRightH1Text);
  discountProductPriceRightP.appendChild(discountProductPriceRightPText);
  discountProductInfoH3.appendChild(discountProductInfoH3Text);
  discountProductBtn.appendChild(discountProductBtnText);
 
  // discountProductBtn.onclick = addToCart(id)


  discountProductPriceLeft.append(
    discountProductPriceLeftH1,
    discountProductPriceLeftP
  );

  discountProductPriceRight.append(
    discountProductPriceRightH1,
    discountProductPriceRightP
  );

  discountProductInfo.appendChild(discountProductInfoH3);

  discountProductHeart.append(discountProductHeartImg);
  discountProductPrice.append(
    discountProductPriceLeft,
    discountProductPriceRight
  );

  discountProductBtnDiv.append(discountProductBtn);

  discountProductContent.append(
    discountProductPrice,
    discountProductInfo,
    discountProductDescription,
    discountProductRating,
    discountProductBtnDiv
  );

  discountProduct.append(
    discountProductImg,
    discountProductContent,
    discountProductHeart,
    discountProductDiscount
  );

  discountProducts.append(discountProduct);

  return discountProduct;
}


let discountCard = products.filter((el) => el.discount).slice(-4);

discountCard.forEach((el) => {
  discountProducts.append(getDisProduct(el));
});


let newCard = products.slice(-4);

newCard.forEach((el) => {
  newRow.append(getDisProduct(el));
});

let newBuy = products.toSorted((a, b) => a.rating - b.rating).slice(-4);

newBuy.forEach((el) => {
  newBuys.append(getDisProduct(el));
});



const btn = document.querySelector(".menu");
const catalogMenu = document.querySelector(".catolog__menu");

btn.addEventListener("click", function () {
  catalogMenu.classList.toggle("show-toggle");
});


const tabButtons = document.querySelectorAll(".btn__map");
const tabContents = document.querySelectorAll(".tab-content");
let active = 0;

function getTabContents(){
  tabContents.forEach((el ,i ) => {
    if(active !== i ){
      el.style.display = "none"
    }else{
      el.style.display = "block"
    }
  })
}

getTabContents()

tabButtons.forEach((el , i) => {
  el.addEventListener("click" , function(){
    active = i;
    getTabContents()
  })
})

// let cartProducts = [];

// cartQuantity.textContent = cartProducts.length;

// function addToCart(id){
//   let productFound = products.find((pr) => pr.id === id);
//   cartProducts.push(productFound);
// }





// const catolog = [
//   {
//     name: "Молоко, сыр, яйцо",
//   },
//   {
//     name: "Хлеб",
//   },
//   {
//     name: "Фрукты и овощи",
//   },
//   {
//     name: "Замороженные продукты",
//   },
//   {
//     name: "Напитки",
//   },
//   {
//     name: "Кондитерские изделия",
//   },
//   {
//     name: "Чай, кофе",
//   },
//   {
//     name: "Бакалея",
//   },
//   {
//     name: "Здоровое питание",
//   },
//   {
//     name: "Зоотовары",
//   },
//   {
//     name: "Непродовольственные товары",
//   },
//   {
//     name: "Детское питание",
//   },
//   {
//     name: "Мясо, птица, колбаса",
//   },
// ];

// const catologs = document.querySelector(".catolog");

// const catologLinkUl = document.createElement("ul");
// const catologLinkLi = document.createElement("li");
// const catologLinkA = document.createElement("a");

// const catologLinkAText = document.createTextNode("Catolog");

// catologLinkLi.appendChild(catologLinkA);
// catologLinkUl.appendChild(catologLinkLi);
// catologs.append(catologLinkUl);
