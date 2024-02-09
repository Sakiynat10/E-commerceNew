const cartQuantity = document.querySelector(".cart-quantity");
const categoryProducts = document.querySelector(".catolog");
let searchInput = document.querySelector(".search-input");
let search = "";

/*Toggle */

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



/* Adding Search*/

