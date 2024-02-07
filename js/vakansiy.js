const vacancyCards = document.querySelector(".vakansy__cards");

function vacancyCard() {
    return `
    <div class="v-card">
    <h1>Должность</h1>
    <p class="v__title">Требования</p>
    <p>Текст про требования текст про требования текст про требования текст про требования текст про
        требования
    </p>
    <p class="v__title">Обязанности</p>
    <p>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про
        обязаности
    </p>
    <p class="v__title">Условия</p>
    <p>Текст про условия текст про условия текст про условия текст про условия текст про условия
        текст
        про условия
    </p>
    <p class="v__title">Звоните</p>
    <div class="v__number">
        <img src="../images/kontakt-images/phone.svg" alt="phonesvg">
        <p class="numbuer">+7 904 271 35 90</p>
    </div>
    </div>
    `;
}

vacancyCards.innerHTML += vacancyCard(el);