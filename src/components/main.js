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
                    <a href="javascript:void(0)" class="product__add"><span class="img-add-cart"></span>Add to Cart</a>
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



let bascetCatalog = [];

class productBascet {
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
                <div class="cart-product-circle"><a href="#" onclick="newBascet.clearBascet();"><i class="fas fa-times-circle"  data-value="${this.id}"></i></a></div>
            </div>
        </div>
        `
    }
}



let productBas = new productBascet();


class bascetList {
    constructor() {
        this.productCatalog = [];
    }
    fetc() {
        this.productCatalog = [...document.getElementsByClassName("product__add")];    
    }
    render() {
        this.productCatalog.forEach((element) => {
            element.addEventListener("click", () => {
                items.forEach((elitems) => {
                    if (element.parentNode.dataset.value == elitems.id) {
                        let renderBascet = new productBascet(elitems.title, elitems.price, elitems.img, elitems.id);
                        bascetCatalog.push(renderBascet);
                        console.log(bascetCatalog);
                        productBas.render();
                        let html = '';
                        bascetCatalog.forEach(({ title, price, img, id }) => {
                            const item = new productBascet(title, price, img, id);
                            html += item.render();
                        })
                        document.querySelector('#addItems').innerHTML = html;
                    }
                })
            })
        })
    }
    clearBascet() {
        this.clearBascetItems = [...document.getElementsByClassName("fa-times-circle")];
        this.clearBascetItems.forEach((el) => {
            el.addEventListener("click", () => {
                console.log(el)
                bascetCatalog.find(element => {
                    bascetCatalog.splice(element, 1);
                    newBascet.render();
                })
            })
        })
    }
}



let newBascet = new bascetList();
newBascet.fetc();
newBascet.render();
newBascet.clearBascet();










//Открытие - закрытие корзины по клику
let bascetNone = document.getElementById("bascetNone");
let bascet = document.getElementById("bascet").addEventListener("click", () => {
    bascetNone.classList.toggle("open-bascet");
    // newBascet.totalPrice();
    // newBascet.render();
});