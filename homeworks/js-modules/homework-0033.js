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

