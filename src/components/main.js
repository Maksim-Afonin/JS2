const items = [
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1193.png", id:0 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1201.png", id:1 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1209.png", id:2 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1240.png", id:3 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1248.png", id:4 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1256.png", id:5 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1264.png", id:6 },
    { title: "MANGO PEOPLE-SHIRT", price: 52, img: "../src/img/1272.png", id:7 }
];

class OneItems {
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

class ItemsList {
    constructor () {
        this.items = [];
    }
    fetchItems() {
        this.items = items;
    }
    render() {
        let html = '';
        this.items.forEach(({ title, price, img, id }) => {
            const OneItem = new OneItems(title, price, img, id);
            html += OneItem.render();
        });
        document.querySelector('#app').innerHTML = html;
    }
    init() {
        this.fetchItems();
        this.render();
    }
}

const list = new ItemsList();
list.init();

class BascetOne{
    constructor (title, price, img, id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
    }
    render() {
        return `
        <div id="itemBascet" data-value="${this.id}">
            <div class="cart-product">
                <a href="#"><img src="${this.img}" alt="" class="cart-product-img"></a>
                <div class="cart-product-text">
                    <div class="cart-product-h2"><a href="#">${this.title}</a></div>
                    <div class="cart-product-price">1  x   $${this.price}</div>
                </div>
                <div class="cart-product-circle"><a href="#" onclick="newBascet.clearBascet();"><i class="fas fa-times-circle"></i></a></div>
            </div>
        </div>
        `
    }
}

class BascetList {
    constructor () {
        this.itemsBascet = [];
    }
    fetchItems() {
        this.itemsBascet = [...document.getElementsByClassName("product__add")];
    }
    render() {
        let htmlBascet = '';
        this.itemsBascet.forEach((element) => {
            element.addEventListener ('click', () => {
                let click = element;
                console.log(click.parentNode.dataset.value)
                items.forEach((elitems) => {
                    if (click.parentNode.dataset.value == elitems.id) {
                        let renderBascet = new BascetOne(elitems.title, elitems.price, elitems.img, elitems.id);
                        htmlBascet += renderBascet.render();
                    }
                    document.querySelector('#addItems').innerHTML = htmlBascet;
                })
                
            })
        });
    }
    clearBascet() {
        let clearItem = [...document.getElementsByClassName("cart-product")];
        clearItem.forEach((el) => {
            el.addEventListener("click", () => {
                let removeDivItem = el;
                if (removeDivItem.parentNode) {
                    removeDivItem.parentNode.removeChild(removeDivItem);
                }
            })
        })
    }
    totalPrice() {
        let totalPrice = document.querySelectorAll('#itemBascet')
        let htmlTotalPrice = 0;
        totalPrice.forEach((el) => {
            htmlTotalPrice += Number(el.dataset.value);
        })
        document.querySelector('#totalPrise').innerHTML = htmlTotalPrice;
    }
    init() {
        this.fetchItems();
        this.render();
        this.totalPrice();
    }
}

let newBascet = new BascetList();
newBascet.init();


//Открытие - закрытие корзины по клику
let bascetNone = document.getElementById("bascetNone");
let bascet = document.getElementById("bascet").addEventListener("click", () => {
    bascetNone.classList.toggle("open-bascet");
    newBascet.totalPrice();
});