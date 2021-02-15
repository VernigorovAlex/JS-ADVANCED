'use strict';

const cards = document.querySelector('.cards');
const wrapperTotalPrice = document.querySelector('.total-price');

class GoodsItem {
    constructor({ title, price, photo }) {
        this.title = title;
        this.price = price;
        this.photo = photo;
    }
    render() {
        return `
        <div class="cards__item">
            <img src="img/${this.photo}.png" alt="photo" class="cards__photo">
            <h3 class="cards__title">${this.title}</h3>
            <p class="cards__desc">${this.price}</p>
        </div>
        `;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'T-shirt man', price: 150, photo: 1 },
            { title: 'Blouse', price: 150, photo: 2 },
            { title: 'Jacket man ', price: 300, photo: 3 },
            { title: 'T-shirt woman', price: 170, photo: 4 },
            { title: 'Blouse', price: 200, photo: 5 },
            { title: 'Blazer man', price: 250, photo: 6 },
        ];
    };
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render();
        });
        cards.insertAdjacentHTML('afterbegin', listHtml);
    };
    sumTotalPrice() {
        const totalPrice = this.goods.reduce((acc, item) => {
            acc += item.price;
            return acc;
        }, 0);
        wrapperTotalPrice.insertAdjacentHTML('afterbegin', `Итого: <span>${totalPrice}</span>`);
    }
}


class Cart {
    constructor() {
        this.goods = [];
    }
    // Добавляет товар в корзину
    addCartItem(item) {
        this.goods.push(item);
    };
    // Удаляет из корзины товар
    deleteCartItem() {
        this.goods.pop(item);
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render();
        });
        cards.insertAdjacentHTML('beforeend', listHtml);
    };
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumTotalPrice();

const cart = new Cart();
// cart.addCartItem(list.goods[0]);
// cart.addCartItem(list.goods[1]);
// cart.addCartItem(list.goods[2]);
// cart.render();
// cart.deleteCartItem(cart.goods[0]);
// cart.deleteCartItem(cart.goods[1]);
// cart.deleteCartItem(cart.goods[2]);
















