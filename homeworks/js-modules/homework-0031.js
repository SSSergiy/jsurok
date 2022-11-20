// Модифікувати інтернет-магазин таким чином,
//  щоб була можливість переглянути всі збережені замовлення
//   навіть після оновлення сторінки(використати localStorage).
// На сторінці спочатку під списком категорій відображається також кнопка “Мої замовлення”.
// При кліку на “Мої замовлення”:
// - замість категорій відображається список усіх замовлень користувача (дата та сума)
// - при кліку на замовлення в середній частині відображаються деталі замовлення.
// - в правій частині відображаються дані про товар з замовлення
// Також реалізувати можливість видалення замовлення зі списку.
const categories = [
  { id: 1, category: 'Toys' },
  { id: 2, category: 'Sports' },
  { id: 3, category: 'Toys' },
  { id: 4, category: 'Grocery' },
  { id: 5, category: 'Garden' }
];
const products = [
  {
    id: 1,
    category_id: 2,
    name: 'Eggplant - Asian',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 2,
    category_id: 5,
    name: 'Jagermeister',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
  },
  {
    id: 3,
    category_id: 2,
    name: 'Wine - Lou Black Shiraz',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
  },
  {
    id: 4,
    category_id: 3,
    name: 'Beef - Ox Tongue',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
  },
  {
    id: 5,
    category_id: 3,
    name: 'Beef - Bones, Marrow',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.'
  },
  {
    id: 6,
    category_id: 2,
    name: 'Appetizer - Shrimp Puff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.'
  },
  {
    id: 7,
    category_id: 4,
    name: 'Appetizer - Shrimp Puff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
  },
  {
    id: 8,
    category_id: 1,
    name: 'Ecolab - Ster Bac',
    description: 'Integer ac leo. Pellentesque ultrices mattis odio.'
  },
  {
    id: 9,
    category_id: 4,
    name: 'Vegetable - Base',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.'
  },
  {
    id: 10,
    category_id: 3,
    name: 'Flour - Corn, Fine',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.'
  },
  {
    id: 11,
    category_id: 1,
    name: 'Beer - Guiness',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 12,
    category_id: 4,
    name: 'Napkin White',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.'
  },
  {
    id: 13,
    category_id: 2,
    name: 'Oil - Truffle, White',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
  },
  {
    id: 14,
    category_id: 5,
    name: 'Wine - Puligny Montrachet A.',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.'
  },
  {
    id: 15,
    category_id: 5,
    name: 'Tomatoes Tear Drop',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.'
  }
];
const productsHtml = document.querySelector('#products');
const description = document.querySelector('#description');
const buttonHtml = document.querySelector('#buy-button');
buttonHtml.style.visibility = 'hidden';
const messageHtml = document.querySelector('#message');
messageHtml.style.visibility = 'hidden';
function newTag(arr, id) {
  description.innerHTML = '';
  buttonHtml.style.visibility = 'hidden';
  productsHtml.replaceChildren();
  for (const index of arr) {
    if (index.category_id === id) {
      const li = document.createElement('li');
      li.setAttribute('data-product-id', `${index.id}`);
      li.innerHTML = index.name;
      li.className = 'link';
      productsHtml.prepend(li);
    }
  }
}

function prodFunction(arr, id) {
  buttonHtml.style.visibility = 'visible';
  for (const index of arr) {
    if (index.id === id) {
      description.innerHTML = index.description;
    }
  }
}

document.querySelector('#categories').addEventListener('click', (e) => {
  e.preventDefault();
  newTag(products, +e.target.dataset.categoryId);
});

document.querySelector('#products').addEventListener('click', (e) => {
  e.preventDefault();
  prodFunction(products, +e.target.dataset.productId);
});

buttonHtml.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    document.querySelector('.form').removeAttribute('hidden');
  }
});

form.addEventListener('submit', retrieveFormValue);
function retrieveFormValue(event) {
  const formName = document.getElementById('formName').value;
  const mailWarehouse = document.getElementById('mailWarehouse').value;
  const numberOfGoods = document.getElementById('numberOfGoods').value;
  let errors = document.getElementById('error');
  if (
    formName.length < 1 ||
    mailWarehouse.length < 1 ||
    numberOfGoods.length < 1
  ) {
    errors.innerText = 'nevsi polia zapovneti';
  } else {
    errors.innerText = '';
    const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type);
    const { form } = document.forms;
    event.preventDefault();
    let values = {};
    for (let field of form) {
      const { type, checked, value, name } = field;
      if (name) {
        if (isCheckboxOrRadio(type)) {
          values[value] = checked;
        } else {
          values[name] = value;
        }
      }
    }
    values.product = products.find(
      (el) => el.description === description.innerText
    );
    values.productPrice = 250;
    values.purchaseDate = new Date().toISOString();
    values.orderPrice = +values.numberOfGoods * values.productPrice;
    if (localStorage.getItem('values')) {
      // proverka lokalstorige na vmestitelstvo
      let pars = Array.from(JSON.parse(localStorage.getItem('values')));
      pars.push(values);
      localStorage.setItem('values', JSON.stringify(pars));
    } else {
      localStorage.setItem('values', JSON.stringify([values]));
    }
  }
}

document.querySelector('.my-categories-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const delCategoriesBtn = document.querySelector('.del-categories-btn');
  const arr = document.querySelectorAll('[data-category-id]');
  arr.forEach((item, i) => {
    if (item.innerHTML.length > 0) {
      item.innerHTML = '';
    }
  });
  const table = document.querySelector('.order-list');
  let pars;
  if (localStorage.getItem('values')) {
    pars = Array.from(JSON.parse(localStorage.getItem('values')));
  }
  const tableElement = document.querySelector('.order-list');
  const addTable = document.createElement('table');
  pars.forEach((item) => {
    const rowTable = addTable.insertRow();
    rowTable.insertCell().innerText = `purchaseDate ${item.purchaseDate}`;
    rowTable.insertCell().innerText = `orderPrice ${item.orderPrice}`;
    tableElement.append(addTable);
  });

  tableElement.addEventListener('click', (e) => {
    e.preventDefault();
    let pars;
    // console.log(e.target.innerText.split(" ")[1]);
    if (e.target.innerText.split(' ')[0] === 'purchaseDate') {
      e.target.parentNode.classList.add('yello');
      // console.log(e.target.innerText.split(' ')[1]);
      if (localStorage.getItem('values')) {
        pars = Array.from(JSON.parse(localStorage.getItem('values')));
				// console.log(pars);
				const values = pars.find(el => el.purchaseDate === e.target.innerText.split(' ')[1])
       console.log(values);
       return
				
      }
    }
    if (e.target.innerText.split(' ')[0] === 'orderPrice') {
      e.target.parentNode.classList.add('yello');
      // console.log(e.target.previousSibling.innerText.split(' ')[1]);
      if (localStorage.getItem('values')) {
        pars = Array.from(JSON.parse(localStorage.getItem('values')));
				// console.log(pars);
				const values = pars.find(el => el.purchaseDate === e.target.previousSibling.innerText.split(' ')[1])
       console.log(values);
       return
      }
    }
  });
});
// purchaseDate
// let pars;
// if ( localStorage.getItem("values")) {
// 	 pars = Array.from(JSON.parse(localStorage.getItem("values")))
// }
// console.log(pars);
// const values = pars.find(el => el.purchaseDate === "2022-11-20T01:43:30.161Z")
// console.log(values);
// return
// }
// console.log(e.target.previousSibling.innerText.split(" ")[1]);
// let pars;
// if ( localStorage.getItem("values")) {
// 	 pars = Array.from(JSON.parse(localStorage.getItem("values")))
// }
// console.log(pars);
// const values = pars.find(el => el.purchaseDate === "2022-11-20T01:43:30.161Z")
// console.log(values);
// return
// }
