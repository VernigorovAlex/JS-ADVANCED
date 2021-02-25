'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

const app = new Vue({
    el: '#root',
    data: {
        goods: [],
        filteredGoods: [],
        cartItems: [],
        imgCatalog: 'http://placehold.it/250x150',
        searchGoods: '',
        errorMessage: '',
        isVisibleCart: false,
    },
    methods: {

        toggleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        addToCart(item) {
            let existant = false;
            for (const goodsItem of this.cartItems) {
                if (goodsItem.id_product === item.id_product) {
                    existant = true;
                    goodsItem.quantity += 1;
                }
            }

            if (!existant) {
                this.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(id) {

        },
        filterGoods() {
            if (!this.goods.length) this.filteredGoods = [];
            if (!this.searchGoods) this.filteredGoods = this.goods;
            this.filteredGoods = this.goods.filter(i => i.product_name.toLowerCase().includes(this.searchGoods.toLowerCase()));
        },
        getGoods() {
            fetch(API)
                .then(r => r.json())
                .then(r => {
                    this.goods = r;
                    this.filteredGoods = this.goods;
                })
                .catch(e => {
                    this.errorMessage = e;
                })
        }


    },
    mounted() {
        this.getGoods();
    }
})