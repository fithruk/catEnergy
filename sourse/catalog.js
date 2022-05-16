const goodsBox = document.querySelector('.goods_box');
const mw = window.innerWidth;

class Goods {
    constructor (options) {
        this.img = options.img
        this.title = options.title
        this.mass = options.mass
        this.price = options.price
        this.taste = options.taste
    }
}

let options = [
    {img : "images/catalog/catalog-1.png", title : "Cat Energy PRO 500", mass : "500 " , taste : "Курица", price : "700 Р." },
    {img : "images/catalog/catalog-2.png", title : "Cat Energy PRO 1000", mass : "1000 " , taste : "Курица", price : "1000 Р." },
    {img : "images/catalog/catalog-3.png", title : "Cat Energy PRO 500", mass : "500 " , taste : "Рыба", price : "700 Р." },
    {img : "images/catalog/catalog-4.png", title : "Cat Energy PRO 500", mass : "1000 " , taste : "Курица", price : "1000 Р." },
    {img : "images/catalog/catalog-5.png", title : "Cat Energy PRO 500", mass : "500 " , taste : "Гречка", price : "700 Р." },
    {img : "images/catalog/catalog-6.png", title : "Cat Energy PRO 500", mass : "1000 " , taste : "Гречка", price : "1000 Р." },
    {img : "images/catalog/catalog-7.png", title : "Cat Energy PRO 500", mass : "500 " , taste : "Рис", price : "700 Р." },
]

showGoods ();

if (mw <= 481){
    activateMobileMenu ();
};

function showGoods() {
    options.forEach(option => {
        let good = new Goods(option);
        let goodsItem = document.createElement('div');
        goodsItem.classList.add('goods_item');
        let classList;
        good.mass > 500 ? classList = "goods_img big" : classList = "goods_img";
        goodsItem.innerHTML = `
        <div class="wrapper">
            <div class="img_box">
                <img class="${classList}" src="${good.img}" alt="">
            </div>
            <div class="title">
                ${good.title} г.
            </div>
            <div class="stat">
                <span class="stat_text">Масса</span><span class="stat_text">${good.mass} г.</span>
            </div>
            <div class="stat">
                <span class="stat_text">Вкус</span><span class="stat_text">${good.taste}</span>
            </div>
            <div class="stat">
                <span class="stat_text">Цена</span><span class="stat_text">${good.price}</span>
            </div>
            <div class="button">
                <a class="link" href="#">заказать</a>
            </div>
        </div> 
        `
        goodsBox.appendChild(goodsItem);

    });

    let showmore = document.createElement('div');
    showmore.classList.add('show_more');
    showmore.innerHTML = `
        <div class="wrapper">
            <div class="plus_box">
                <span class="x"></span>
                <span class="y"></span>
            </div>
            <div class="title">
                Показать еще 100500 товаров
            </div>
            <div class="content">
                На самом деле вкусов гораздо больше!
            </div>
            <div class="button">
                <a class="link" href="#">заказать</a>
            </div>
        </div>
        `
    goodsBox.appendChild(showmore);
    
};

function activateMobileMenu () {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.phone_nav');
    burger.addEventListener('touchstart', () => {
        menu.classList.toggle('active');
    })
}