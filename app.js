'use strict';

const goods = [
    { title: 'T-shirt man', price: 150, photo: 1 },
    { title: 'Blouse', price: 150, photo: 2 },
    { title: 'Jacket man ', price: 300, photo: 3 },
    { title: 'T-shirt woman', price: 170, photo: 4 },
    { title: 'Blouse', price: 200, photo: 5 },
    { title: 'Blazer man', price: 250, photo: 6 },
];

const getGoodsItemTemplate = ({ title, price, photo }) => {
    return `
        <div class="cards__item">
            <img src="img/${photo}.png" alt="photo" class="cards__photo">
            <h3 class="cards__title">${title}</h3>
            <p class="cards__desc">${price}</p>
        </div>
    `;
};

const renderGoods = () => {
    const goodsTemplates = goods.map(item => getGoodsItemTemplate(item)).join('');
    const cardsList = document.querySelector('.cards');
    cardsList.insertAdjacentHTML('afterbegin', goodsTemplates);
};

renderGoods();