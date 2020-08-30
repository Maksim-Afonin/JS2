let items = [
    { title: "MANGO PEOPLE-SHIRT", price: 152, img: "../src/img/1193.png", id:0 },
    { title: "MANGO PEOPLE-SHIRT", price: 502, img: "../src/img/1201.png", id:1 },
    { title: "MANGO PEOPLE-SHIRT", price: 23, img: "../src/img/1209.png", id:2 },
    { title: "MANGO PEOPLE-SHIRT", price: 85, img: "../src/img/1240.png", id:3 },
    { title: "MANGO PEOPLE-SHIRT", price: 552, img: "../src/img/1248.png", id:4 },
    { title: "MANGO PEOPLE-SHIRT", price: 252, img: "../src/img/1256.png", id:5 },
    { title: "MANGO PEOPLE-SHIRT", price: 79, img: "../src/img/1264.png", id:6 },
    { title: "MANGO PEOPLE-SHIRT", price: 72, img: "../src/img/1272.png", id:7 }
];

class productItems {
    constructor (title, price, img, id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
    }
    render() {
        return `
        <article id="productItem" class="items_catalog">
            <a href="single-page.html">
                <div class="blok-items"  data-value="${this.id}">
                    <img src="${this.img}" alt="">
                    <p class="p-blok-items">${this.title}</p>
                    <p class="price-blok-items">$${this.price}</p>
                    <a href="javascript:void(0)" class="product__add" data-value="${this.id}"><span class="img-add-cart"></span>Add to Cart</a>
                </div>        
            </a>
        </article>
        `
    }
}

class itemsList {
    constructor () {
        this.items = [];
    }
    fetchItems() {
        this.items = items;
    }
    render() {
        let html = '';
        this.items.forEach(({ title, price, img, id }) => {
            const item = new productItems(title, price, img, id);
            html += item.render();
        });
        document.querySelector('#app').innerHTML = html;
    }
    init() {
        this.fetchItems();
        this.render();
    }
}

const list = new itemsList();
list.init();




class itemBascet {
    constructor(title, price, img, id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
    }
    render() {
        return `
        <div id="itemBascet" data-value="${this.id}">
            <div class="cart-product" data-price="${this.price}">
                <a href="#"><img src="${this.img}" data-value="${this.id}" alt="" class="cart-product-img"></a>
                <div class="cart-product-text">
                    <div class="cart-product-h2"><a href="#">${this.title}</a></div>
                    <div class="cart-product-price">1  x   $${this.price}</div>
                </div>
                <div class="cart-product-circle"  id="clearBascet" data-value="${this.id}"><a href="#"><i class="fas fa-times-circle"></i></a></div>
            </div>
        </div>
        `
    }
}


class bascetList {
    constructor() {
        this.productCatalog = [];
        this.bascet = [];
    }
    fetc() {
        this.productCatalog = [...document.getElementsByClassName("product__add")];
    }
    addBascetArr() {
        this.productCatalog.forEach((product) => {
            product.addEventListener("click", () => {
                if (product.dataset.value == items[product.dataset.value].id) {
                    this.bascet.push(items[product.dataset.value]);
                    this.render();
                    this.clear();
                    this.totalPrice();
                }
            })
        })
    }
    render() {
        let html = '';
        this.bascet.forEach(({ title, price, img, id }) => {
            const item = new itemBascet(title, price, img, id);
            html += item.render();
        })
        document.querySelector('#addItems').innerHTML = html;
    }
    clear() {
        this.clearBascetItems = [...document.querySelectorAll("#clearBascet")];
        this.clearBascetItems.forEach((el) => {
            el.addEventListener("click", () => {
                let clearItem = [...document.getElementsByClassName("cart-product")];
                clearItem.forEach((el) => {
                    el.addEventListener("click", () => {
                        let removeDivItem = el;
                        if (removeDivItem.parentNode) {
                            removeDivItem.parentNode.removeChild(removeDivItem);
                            this.totalPrice();
                        }
                    })
                })
                this.bascet = this.bascet.filter((element) => element.id != el.dataset.value)
            })
        })
    }
    totalPrice() {
        let totalPrice = [...document.getElementsByClassName('cart-product')];
        let htmlTotalPrice = 0;
        totalPrice.forEach((el) => {
            htmlTotalPrice += Number(el.dataset.price);
        })
        document.querySelector('#totalPrise').innerHTML = "$" + htmlTotalPrice;
    }
    init() {
        this.fetc();
        this.addBascetArr();
        this.render();
        this.clear();
    }
}


let basketList = new bascetList();
basketList.init();



//Открытие - закрытие корзины по клику
let bascetNone = document.getElementById("bascetNone");
let bascetOpen = document.getElementById("bascet").addEventListener("click", () => {
    bascetNone.classList.toggle("open-bascet");
});
