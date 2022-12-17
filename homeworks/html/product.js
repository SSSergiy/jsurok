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
const productsHtml = document.querySelector(".product")
const product = productsInfo.find(obj => obj.id === history.state.id)
	productsHtml.insertAdjacentHTML("beforeend", `
						<div class="product__title">Product ${product.id}</div>
						<div class="product__image"></div>
						<div class="product__price">${product.price} $</div>
						<button class="product__btn" ${product.isActive?null:"hidden"}>Add to cart</button>
 `)

