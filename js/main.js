const discountProduct = document.querySelector(".discount__product")

const products = [
    {
        img1:"img1",
        discount:"-50%",
        img2:"img2",
        priceLeftH1:"44,50 ₽",
        priceLeftP:"С картой",
        priceRightH1:"44,50 ₽",
        priceRightP:"С картой",
        infosH3:"Г/Ц Блинчики с мясом вес, Россия",
        img3:"img3",
        korzinu:"В корзину"
    }
]


function getProductCard({
    img1, 
    discount , 
    img2 , 
    priceLeftH1,
    priceLeftP,
    priceRightH1,
    priceRightP,
    infosH3,
    img3,
    korzinu
}){
    const discountProduct = document.createElement("div");
    discountProduct.className = "discount__product"
    const heartProduct = document.createElement("div");
    heartProduct.className = "heart";
    const ProductImg1 = document.createElement("img");
    ProductImg1.src = img1;
    const discountAmount= document.createElement("a");
    discountAmount.className = discount;
    const ProductImg2= document.createElement("img");
    ProductImg2.src = img2;
    const discountProductPrice= document.createElement("div");
    discountProductPrice.className = "discount__product--price";
    const discountProductPriceLeft= document.createElement("div");
    discountProductPriceLeft.className = "price__left";
    const discountProductPriceLeftH1= document.createElement("h1");
    discountProductPriceLeftH1.className = priceLeftH1;
    const discountProductPriceLeftP= document.createElement("div");
    discountProductPriceLeftP.className = priceLeftP;
    const discountProductPriceRight= document.createElement("div");
    discountProductPriceRight.className = "price__right";
    const discountProductPriceRightH1= document.createElement("h1");
    discountProductPriceRightH1.className = priceRightH1;
    const discountProductPriceRightP= document.createElement("div");
    discountProductPriceRightP.className = priceRightP;
    const discountProductInfos= document.createElement("div");
    discountProductInfos.className = "discount__product--infos";
    const discountProductInfosH3= document.createElement("div");
    discountProductInfosH3.className = infosH3;
    const ProductImg3= document.createElement("div");
    ProductImg3.src = img3;
    const discountProductLink= document.createElement("div");
    discountProductLink.className = korzinu;
}

heartProduct.appendChild(ProductImg1);


discountAmount.textContent = discount;
discountProductPriceLeftH1.textContent = priceLeftH1;
discountProductPriceLeftP.textContent = priceLeftP;
discountProductPriceRightH1.textContent = priceRightH1;
discountProductPriceRightP.textContent = priceRightP;
discountProductLink.textContent = korzinu;

discountProductPriceLeft.append(
    discountProductPriceLeftH1,
    discountProductPriceLeftP
)

discountProductPriceRight.append(
    discountProductPriceRightH1,
    discountProductPriceRightP
)

discountProductPrice.append(
    discountProductPriceLeft,
    discountProductPriceRight
)

discountProductInfos.append(
    discountProductInfosH3
)

discountProduct.append(
    heartProduct,
    discountProduct,
    ProductImg2,
    discountProductPrice,
    discountProductInfos,
    ProductImg3,
    discountProductLink
);


return discountProduct;


products.forEach((el) => {
    products.append(getProductCard(el));
})