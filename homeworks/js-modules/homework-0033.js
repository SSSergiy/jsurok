// 1)Робота з даними і історією
// Потрібно створити масив товарів з id, name, price, isActive
// Вивести список на основі готової верстки на головну сторінку
// По кліку на карточку товару на головній має відбуватися перехід на сторінку товару
// https://developer.mozilla.org/ru/docs/Web/API/History/pushState
// На сторінці товару потрібно відображати актуальну інформацію - назву товару
// https://developer.mozilla.org/ru/docs/Web/API/History/state
// 2)Робота з DOM
// Кнопка корзини біля товару доступна лише якщо товар isActive
// Елементи для списку створювати через document.createElement і addEventListener
// Підміняти інформацію про товар на актуальну на сторінці товару через:
// innerText/innerHTML/insertAdjacent*
// 3)Робота з ООП
// Створити javascript-клас MyCustomElement
// при створенні він має приймати селектор для елемента (div, span, buttton...)
// та мати необхідні методи для роботи, які підходять, наприклад:
// addClass, removeClass, setAttribute, removeAttribute, setStyle
// Що працює по ланцюжку на подобі цього
// new MyCustomElement('div').addClass('hidden').setAttribute('name', nameStr);
// Підказка: методи класу повинні повертати this
// Додавання картинок, робота з localStorage - необов'язково, за бажанням

const productsInfo =
[
  {
    id: 1,
    name: 'Ivan',
    price: '770',
    isActive: true
  },
  {
    id: 2,
    name: 'Ivan',
    price: '660',
    isActive: false
  },
  {
    id: 3,
    name: 'Ivan',
    price: '550',
    isActive: true
  },
  {
    id: 4,
    name: 'Ivan',
    price: '750',
    isActive: false
  },
  {
    id: 5,
    name: 'Ivan',
    price: '750',
    isActive: true
  },
  {
    id: 6,
    name: 'Ivan',
    price: '60',
    isActive: false
  }
	];
const productsHtml = document.querySelector(".products")
const lala = (price,id) => {
	history.pushState({ id, price}, "", "./html/product.html")
	location = "./product.html"
}
productsInfo.map(({price,id,isActive}) => {
	productsHtml.insertAdjacentHTML("beforeend", `
	<div class="product"  onclick="lala(${price},${id})">
						<div class="product__title">Product ${id}</div>
						<div class="product__image"></div>
						<div class="product__price">${price} $</div>
						<button class="product__btn" ${isActive?null:"hidden"}>Add to cart</button>
 </div>`)
})

class MyCustomElement {
	tagName = "";
	constructor(tagName) {
			this.tagName = document.createElement(tagName);
	}
	addClass(name) {
		this.tagName.classList.add(name)
		return this
	}
	setAttributes(name, nameStr) {
		this.tagName.setAttribute(name, nameStr)
		return this
	}
}
const arr = new MyCustomElement("div")
console.log(arr.addClass("auer").setAttributes("oOoOOOoo","TttTtT"));

