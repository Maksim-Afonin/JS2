let itemName = ["MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT", "MANGO PEOPLE-SHIRT"];
let itemPrise = ["$52", "$52", "$52", "$52", "$52", "$52", "$52", "$52"];
let itemImg = ["../src/img/1193.png", "../src/img/1201.png", "../src/img/1209.png", "../src/img/1240.png", "../src/img/1248.png", "../src/img/1256.png", "../src/img/1264.png", "../src/img/1272.png"];
let id = "";

function createItems() {
    let arr = [];
    itemName.forEach((name, index) => {
        arr.push(createItem(name, itemPrise[index], itemImg[index], id + [index]))
    })
    return arr
}

function createItem (itemName, itemPrise, itemImg, id) {
    return {
        itemName, itemPrise, itemImg, id
    }
}

let items = {
    item: [],
    container: null,
    init() {
        this.container = document.querySelector('#app');
        this.item = createItems();
        this._render()
    },
    _render() {
        let html = '';
        this.item.forEach(it => {
            html += `
            <article id="productItem" class="items_catalog">
                <a href="single-page.html">
                    <div class="blok-items">
                        <img src="${it.itemImg}" alt="">
                        <p class="p-blok-items">${it.itemName}</p>
                        <p class="price-blok-items">${it.itemPrise}</p>
                        <a href="javascript:void(0)" class="product__add"  data-value="${it.id}"><span class="img-add-cart"></span>Add to Cart</a>
                    </div>        
                </a>
            </article>
            `
        })
        this.container.innerHTML = html;
    }
}

items.init();


//Продвинутый курс - Урок №1

//Открытие - закрытие корзины по клику
let bascetNone = document.getElementById("bascetNone");
let bascet = document.getElementById("bascet").addEventListener("click", () => bascetNone.classList.toggle("open-bascet"));



//Удаление элементов с выпадающей корзины
function clearBascet() {
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



//Добавление товара в корзину
let addItems = document.querySelector('#addItems');
let productItems = [...document.getElementsByClassName("product__add")];

productItems.forEach((element) => {
    element.addEventListener("click", () => {
        addItems.innerHTML += `
            <div id="itemBascet">
                <div class="cart-product">
                    <a href="#"><img src="${items.item[element.dataset.value].itemImg}" alt="" class="cart-product-img"></a>
                    <div class="cart-product-text">
                        <div class="cart-product-h2"><a href="#">${items.item[element.dataset.value].itemName}</a></div>
                        <div class="cart-product-price">1  x   ${items.item[element.dataset.value].itemPrise}</div>
                    </div>
                    <div class="cart-product-circle"><a href="#" onclick="clearBascet();"><i class="fas fa-times-circle"></i></a></div>
                </div>
            </div>
            `
    })
})




























