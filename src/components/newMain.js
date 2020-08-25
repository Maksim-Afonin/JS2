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

let arrBascetList = [];

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
            const productItem = new productItems(title, price, img, id);
            html += productItem.render();
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



class bascetItem{
    constructor (title, price, img, id) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = id;
    }
    render() {
        // let arrBascetList = [];
        // arrBascetList.push({title, price, img, id});
        // // return [{title, price, img, id}];
        // console.log(arrBascetList);
    }
}

class bascetList {
    constructor () {

    }
    fetchItems() {
        this.itemsList = [...document.getElementsByClassName("product__add")];
    }
    render() {
        this.itemsList.forEach((el) => {
            el.addEventListener ("click", () =>{
                items.forEach((elementItems) => {
                    if (el.parentNode.dataset.value == elementItems.id) {
                        let bascetList = new bascetItem(elementItems.title, elementItems.price, elementItems.img, elementItems.id);
                        // console.log(`test ${elementItems.id}`)
                        arrBascetList.push(bascetList);
                    }
                })
            })
        })
    }
    clearBascet() {
        this.clearBascetList = [...document.getElementsByClassName("cart-product-circle")];
        this.clearBascetList.forEach((el) => {
            el.addEventListener ("click", () => {
                arrBascetList.forEach((element) => {
                    if (el.parentNode.dataset.value == elementItems.id) {
                        
                    }
                })
            })
        })
    }
    // totalPrice() {
    //     let totalPrice = [...document.getElementsByClassName('cart-product')];
    //     let htmlTotalPrice = 0;
    //     totalPrice.forEach((el) => {
    //         htmlTotalPrice += Number(el.dataset.price);
    //     })
    //     document.querySelector('#totalPrise').innerHTML = "$" + htmlTotalPrice;
    // }
    init() {
        this.fetchItems();
        this.render();
    }
}

let newBascet = new bascetList();
newBascet.init();

console.log(arrBascetList);

//Открытие - закрытие корзины по клику
let bascetNone = document.getElementById("bascetNone");
let bascet = document.getElementById("bascet").addEventListener("click", () => {
    bascetNone.classList.toggle("open-bascet");
    // newBascet.totalPrice();
    // newBascet.render();
});