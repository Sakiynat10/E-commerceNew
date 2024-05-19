const favouriteRow = document.querySelector(".favourite-row");



function getFavouriteProducts(){
    favouriteRow.innerHTML = "";
    favouriteProducts.forEach((pr) => {
        favouriteRow.innerHTML += getProductCard(pr , "favourite");
    })
}
getFavouriteProducts();





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
    getFavouriteProducts();
    localStorage.setItem("cart" , JSON.stringify(cartProducts));
  }
  
  
  function increaseQuantity(id){
    cartProducts = cartProducts.map((pr) => {
      if(pr.id === id){
        pr.quantity++;
      }
      return pr;
    });
    getFavouriteProducts();
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
    
    getFavouriteProducts();
    getCartQuantity();
    localStorage.setItem( "cart", JSON.stringify(cartProducts));
  }