let categoryCards = document.querySelector(".category__cards");

function getCategory({name, image}) {
  return `
    <div class="category__card">
        <img src=${image} alt=${name}/>
        <div class="overlay">
            <p>${name}</p>
        </div>
    </div>
    `;
}


categories.map((el) => {
    categoryCards.innerHTML += getCategory(el)
})
