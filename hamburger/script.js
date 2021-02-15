'use strict';

// * Некая сеть фастфуда предлагает несколько видов гамбургеров:
// Маленький (50 рублей, 20 калорий).
// Большой (100 рублей, 40 калорий).
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// С сыром (+10 рублей, +20 калорий).
// С салатом (+20 рублей, +5 калорий).
// С картофелем (+15 рублей, +10 калорий).
// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою.


class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = [stuffing];
        this.toppings = [];
    }
    // Добавить добавку }
    addTopping(topping) {
        if (!this.toppings.includes(topping)) {
            return this.toppings.push(topping);
        }
    }
    // Убрать добавку }
    removeTopping(topping) {
        if (this.toppings.includes(topping)) {
            return this.toppings = this.toppings.map(i => i !== topping);
        }
    }
    // Получить список добавок }
    getToppings(topping) {
        if (this.toppings.length === 0) {
            return console.log(`В вашем бургере нет добавок.`);
        } else {
            return console.log(`Список добавок в бургере: ${this.toppings}`);
        }
    }
    // Узнать размер гамбургера }
    getSize() {
        return console.log(`Размер бургера: ${this.size}`);
    }
    // Узнать начинку гамбургера }
    getStuffing() {
        return console.log(`Начинка бургера: ${this.stuffing}`);
    }
    // Узнать цену }     
    calculatePrice() {
        let priceArray = this.toppings.map(i => Hamburger.toppings[i].price);
        priceArray.push(Hamburger.sizes[this.size].price, Hamburger.stuffings[this.stuffing].price);
        let price = priceArray.reduce((acc, price) => acc += price, 0);
        return console.log(`Сейчас бургер стоит: ${price} рублей`);
    }
    // Узнать калорийность }      
    calculateCalories() {
        let caloriesArray = this.toppings.map(i => Hamburger.toppings[i].calories);
        caloriesArray.push(Hamburger.sizes[this.size].calories, Hamburger.stuffings[this.stuffing].calories);
        let calories = caloriesArray.reduce((acc, calories) => acc += calories, 0);
        return console.log(`Сейчас в бургере: ${calories} калорий.`);
    }
}


Hamburger.size_small = 'size_small';
Hamburger.size_large = 'size_large';
Hamburger.sizes = {
    [Hamburger.size_small]: {
        price: 50,
        calories: 20,
    },
    [Hamburger.size_large]: {
        price: 100,
        calories: 40,
    }
}


Hamburger.stuffing_cheese = 'stuffing_cheese';
Hamburger.stuffing_salad = 'stuffing_salad';
Hamburger.stuffing_potato = 'stuffing_potato';
Hamburger.stuffings = {
    [Hamburger.stuffing_cheese]: {
        price: 10,
        calories: 20,
    },
    [Hamburger.stuffing_salad]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.stuffing_potato]: {
        price: 15,
        calories: 10,
    }
}

Hamburger.topping_seasoning = 'toping_seasoning';
Hamburger.topping_mayo = 'topping_mayo';
Hamburger.toppings = {
    [Hamburger.topping_seasoning]: {
        price: 15,
        calories: 0,
    },
    [Hamburger.topping_mayo]: {
        price: 20,
        calories: 5,
    },
}


const hamburger = new Hamburger(Hamburger.size_large, Hamburger.stuffing_cheese);
hamburger.calculatePrice();
hamburger.calculateCalories();
hamburger.getSize();
hamburger.getStuffing();
hamburger.getToppings();
hamburger.addTopping(Hamburger.topping_mayo);
hamburger.getToppings();
hamburger.calculatePrice();
hamburger.calculateCalories();



