let categoryCards = document.querySelector(".category__cards");

function getCategoryCard({name, image}) {
  return `
    <div href="#"  class="category__card">
        <img src=${image} alt=${name}/>
        <div class="overlay">
            <a onclick="getCategory("${name}")">${name}</a>
        </div>
    </div>
    `;
}


categories.map((el) => {
    categoryCards.innerHTML += getCategoryCard(el)
})

function getCategory(name) {
    localStorage.setItem("categiry" , name);
}