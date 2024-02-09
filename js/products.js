const productsRow = document.querySelector(".discount__products");


// const productsQuantity = document.querySelector(".products-quantity");
const pagination = document.querySelector(".pagination");
let activePage = +localStorage.getItem("page") || 1;

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
  discountProductRating.src = ".././images/index/stars.png";
  discountProductRating.className = "product__star";
  const discountProductBtnDiv = document.createElement("div");
  discountProductBtnDiv.className = "product__btn__div";
  const discountProductBtn = document.createElement("button");
  discountProductBtn.className = "korzinu";
  const discountProductHeartImg = document.createElement("img");
  discountProductHeartImg.src = ".././images/index/heart.svg";
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
    discountProductRating.src = "../images/products/rating1.svg";
  } else if (rating == 4.5) {
    discountProductRating.src = "../images/products/rating4.5.png";
  } else if (rating == 4) {
    discountProductRating.src = "../images/products/rating3.png";
  } else if (rating == 3) {
    discountProductRating.src = "../images/products/rating3.svg";
  } else if (rating == 2) {
    discountProductRating.src = "../images/products/rating2.png";
  } else if (rating == 1) {
    discountProductRating.src = "../images/products/rating2.png";
  }

  if (discount == 0) {
    discountProductDiscount.style.display = "none";
  }
  discountProductDiscount.appendChild(discountProductDiscountText);
  discountProductPriceLeftH1.appendChild(discountProductPriceLeftH1Text);
  discountProductPriceLeftP.appendChild(discountProductPriceLeftPText);
  discountProductPriceRightH1.appendChild(discountProductPriceRightH1Text);
  discountProductPriceRightP.appendChild(discountProductPriceRightPText);
  discountProductInfoH3.appendChild(discountProductInfoH3Text);
  discountProductBtn.appendChild(discountProductBtnText);

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

  productsRow.append(discountProduct);

  return discountProduct;
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
    productsRow.append(getDisProduct(el));
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