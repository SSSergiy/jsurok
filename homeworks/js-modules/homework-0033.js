 
const productsInfo =
[
  {
    id: 1,
    name: 'Ivan',
    price: '770',
    isActive: false
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
    isActive: false
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
    isActive: false
  },
  {
    id: 6,
    name: 'Ivan',
    price: '60',
    isActive: false
  }
];
const productsHtml = document.querySelector(".products")


productsInfo.map(({price,id}) => {
	productsHtml.insertAdjacentHTML("beforeend", `
	<div class="product">
						<div class="product__title">Product ${id}</div>
						<div class="product__image"></div>
						<div class="product__price">${price} $</div>
						<button class="product__btn">Add to cart</button>
 </div>`)
})
