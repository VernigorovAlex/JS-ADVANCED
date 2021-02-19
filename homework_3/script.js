'use strict';

const cards = document.querySelector('.cards');
const wrapperTotalPrice = document.querySelector('.total-price');

fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
    .then(response => response.json())
    .then(json => list.getGoods(json))
    .then(json => list.render())
    .then(json => list.sumTotalPrice())


class GoodsList {
    goods = [];

    __getGoodsItemTemplate({ id_product, product_name, price }) {
        return `
        <div class="cards__item">
            <img src="img/${id_product}.jpg" alt="photo" class="cards__photo">
            <h3 class="cards__title">${product_name}</h3>
            <p class="cards__desc">${price}</p>
            <button class="btn" id="${id_product}">Add good</button>
        </div>
        `;
    }

    getGoods(goods) {
        this.goods = goods;
    }

    render() {
        const goodsItemTemplate = this.goods.map(good => this.__getGoodsItemTemplate(good)).join('');
        cards.insertAdjacentHTML('afterbegin', goodsItemTemplate);
        const button = document.querySelectorAll('.btn');
        button.forEach(btn => {
            btn.addEventListener('click', function handlerClick(event) {
                console.log('Ты хочешь добавить товар с id: ', event.target.id);
            })
        })
    }

    sumTotalPrice() {
        const totalPrice = this.goods.reduce((acc, good) => {
            acc += good.price;
            return acc;
        }, 0);
        wrapperTotalPrice.insertAdjacentHTML('afterbegin', `Итого: <span>${totalPrice}</span>`);
    }
}

class Bascet extends GoodsList {
    basket = [];

    getBasket(items) {
        this.basket = items;
    }
    addItemBasket(item) {
        this.basket.push(item);
    }
    deleteItemBasket(item) {
        this.basket.pop(item);
    }
    infoAboutBasketList() {
        console.log(this.basket);
    }
}


const list = new GoodsList();
const bascet = new Bascet();
