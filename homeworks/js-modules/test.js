// const reactions = ["👍", "👎", "💚", "💩", "🤣"];
// const container = document.querySelector(".container");
// const reactionElements = reactions.map((reaction) => {
//   const wrapper = document.createElement("div");
//   const button = document.createElement("button");
// 	button.classList.add("button")
//   button.innerText = reaction;
//   const counter = document.createElement("div");
//   counter.classList.add("counter");
//   counter.innerText = 0;
//   wrapper.append(button, counter);
//   return wrapper;
// });

// reactionElements.forEach((elem) => container.appendChild(elem));

// container.addEventListener("click", function (e) {
// 	if (e.target.classList.contains('button')) {
// 		e.target.nextSibling.innerHTML++
// 	}
// }, false)

// Якщо за числом йде підмасив, додавати це число,
// 	потім крапку, а потім поточний елемент підмасиву.
//  Ви можете розраховувати на коректність вхідних данинх
// 	- перед підмасивом обовʼязково має бути число.
// const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
// function a(arr) {
// 	const ul = document.createElement('ul');
	
//   for (let index = 0; index < arr.length; index++) {
// 		if(Array.isArray(arr[index])) {
// 			ul.insertAdjacentHTML('beforeend', a(arr[index]).outerHTML)
// 			a(arr[index])
// 		}
		
// 		else {
// 			ul.insertAdjacentHTML('beforeend', `<li>${arr[index]}</li>`)
// 			console.log(arr[index]);
// 		}
//     // if (!Array.isArray(arr[index])) {
//     //   console.log(ul);
//     //   ul.insertAdjacentHTML('beforeend', `<li>${arr[index]}</li>`);
//     // }
//     // if (Array.isArray(arr[index])) {
//     //   console.log(ul);
// 			// ul.insertAdjacentHTML('beforeend', a(arr[index]).outerHTML);
// 			// console.log(arr[index]);

//     // }
// 	}
// 	return ul
// }
// // a(listOfLists);
// console.log(a(listOfLists));

// const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
// const number =[1,2]

// const bodyHtml = document.querySelector('body')
// bodyHtml.appendChild(a(listOfLists))
// function a(arr) {

//    const ul = document.createElement('ul');

//    for (let index = 0; index < arr.length; index++) {
//       if (Array.isArray(arr[index])) {
//          ul.insertAdjacentHTML('beforeend', a(arr[index]).outerHTML)
//          a(arr[index])
//       }

//       else {
//          ul.insertAdjacentHTML('beforeend', `<li>${arr[index]}</li>`)
//       }

//    }
//    return ul
// }

// console.log(a(listOfLists));

// const btn = document.querySelector('#button');
// console.log(btn);
// const inp = document.querySelector('input')
// console.log(inp.value.split('/')[0])

// function goToUrl (){
//     let d = 'https://'
//     if(inp.value.split(':')[0] ==='https' || inp.value.split(':')[0] ==='http'){
// 			console.log(inp.value);
// 			location.href = inp.value
//     } else{
        
// 				location.href = d + inp.value
//     }

// }
// btn.addEventListener('click', (e) => {
//     goToUrl()
// });
// const btn = document.querySelector('#button');
// const inp = document.querySelector('input')
// function goToUrl (){
//     let protocol = 'https://'
//     if(inp.value.split(':')[0] ==='https' || inp.value.split(':')[0] ==='http'){
//         location.href = inp.value
//     } else{
//         location.href = protocol + inp.value
// 	}
// }
// btn.addEventListener('click', (e) => {
//     goToUrl()
// });

// const btnHtml = document.querySelector('#button');
// const inputHtml = document.querySelector('input');
// const nameProtocol = inputHtml.value.split(':')[0];
// function goToPage() {
//   let d = 'https://';
//   if (nameProtocol === 'https' || nameProtocol === 'http') {
//     location.href = inputHtml.value;
//   } else {
//     location.href = d + inputHtml.value;
//   }
// }
// btnHtml.addEventListener('click', (e) => {
//   goToPage();
// });

// WINDOW
// const windowWidth = window.innerWidth;
// console.log(`Ширина окна браузера: ${windowWidth}px`);
// */
//========================================================================================================================================================
//BOM

//Navigator
/*
С помощью объекта navigator,
мы можем получить информацию о самом
браузере и операционной системе.
*/
/*
//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
//Платформа
console.log(navigator.platform);
*/

//=================

//Location
/*
С помощью объекта location мы можем
получить текущий URL или
перенаправить браузер по новому адресу.
*/
/*
//Получаем URL
console.log(location.href);
//Меняем URL
location.href = "https://fls.guru";
*/

//=================

//History
/*
Объект history позволяет
управлять историей браузера,
передвигаться по посещенным ранее страницам.
*/
/*
history.back();
history.forward();
*/


//=================

//Alert
//alert("Привет!");

//Сonfirm
//const confirmResult = confirm("Хочешь научиться верстать?");
//console.log(confirmResult);

//Prompt
//const promptResult = prompt("Кто ты по жизни?");
//console.log(promptResult);

//========================================================================================================================================================

// DOM
// Навигация по документу

/*
Самые верхние элементы дерева
доступны как свойства объекта document
*/
/*
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);
*/
//------------------------------------------

// Получаем объект body
//const bodyElement = document.body;

// Первый и последний дочерние элементы
//const firstChildNode = bodyElement.firstChild;
//const lastChildNode = bodyElement.lastChild;

//console.log(firstChildNode);
//console.log(lastChildNode);

/*
В документе, возможено, есть ещё «какой-то HTML-код»,
но на момент выполнения скрипта браузер ещё
до него не дошёл.
Поэтому следует размещать скрипт в самом конце
документа
*/

//------------------------------------------

//Коллекция childNodes содержит список всех детей,
//включая текстовые узлы.
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

//Для проверки наличия дочерних узлов
//существует также специальная функция hasChildNodes()
//console.log(bodyElement.hasChildNodes());

/*
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция – особый перебираемый объект - псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция – это не массив
*/
/*
//Перебор коллекции
for (let node of childNodes) {
	console.log(node); // покажет все узлы из коллекции
}
*/

// "Живые" коллекции
/*
Почти все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы в DOM, то они появятся в сохранённой коллекции автоматически.
Еще вернемся к этому позже.
*/

//Только для чтения
/*
DOM-коллекции, и даже более – все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ....
Для изменения DOM требуются другие методы.
*/
//------------------------------------------

/*
// Соседние и родительский узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
*/

//------------------------------------------

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

// Получаем коллекцию всех дочерних элементов
//const bodyСhildren = bodyElement.children;
//console.log(bodyСhildren);

/*
// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
*/

//========================================================================================================================================================

// Поиск произвольного элемента

/*
// Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Поиск по смешанному селектору тега и класса
const elemsThree =
	document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

// Поиск по тегу первого уровня вложенности
const elemsFour =
	document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Поиск по нескольким классам
const elemsFive =
	document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

// Поиск по вложенным классам
const elemsSix =
	document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

// Поиск по ID
const elemsSeven =
	document.querySelectorAll('#listItem');
console.log(elemsSeven);

// Поиск по атрибуту
const elemsEight =
	document.querySelectorAll('[data-item]');
console.log(elemsEight);

// Поиск по атрибуту со значением
const elemsNine =
	document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);
*/

//--------------


// querySelectorAll - статичная коллекция

// Получение конкретного элемента коллекции
//const elems = document.querySelectorAll('li');
//console.log(elems[2]);

/*
for (const item of elems) {
	console.log(item);
}
*/
/*
elems.forEach(item => {
	console.log(item);
});
*/


//--------------


/*
Искать можно не только в document
*/
/*
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
*/
//----------

/*
Неожиданный результат поиска
*/
/*
const subList =
	document.querySelectorAll('.lesson__sub-list');
const listItems =
	subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
console.log(listItems);
*/
/*
В данном примере,
когда мы выбрали ".lesson__list .lesson__item-sub-list"
в контексте <ul> с классом "lesson__sub-list", элемент с классом
".lesson__item-sub-list" были всё равно найден, хотя
.lesson__list не является потомком элемента в котором происходил
поиск (".lesson__sub-list").

По умолчанию, querySelectorAll() проверяет только последний
элемент без учёта контекста.
*/

//---------------------

//elem.querySelector(CSS);
/*
Возвращает первый элемент внутри elem, соответствующий
данному CSS-селектору.
*/
/*
//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
*/


//---------------------

//document.getElementById(ID)
/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(id),
где бы он ни находился.
*/
/*
const elem = document.getElementById('listItem');
console.log(elem);
*/
/*
1. id - уникален
2. Поиск полько внутри document.
*/

//-------

/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию.Передав "*" вместо тега, можно получить всех потомков.
*/
/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/
//-------

/*
elem.getElementsByClassName(className)
возвращает элементы, которые имеют данный CSS - класс.
*/
/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/
//-------

//document.getElementById(ID) и elem.getElementsBy*
/*
На данный момент, они используются редко,
так как querySelectorAll может их заменить.
Но отличия все же есть!
*/

//getElementsBy*
// ВНИМАНИЕ - getElementsBy.. а не getElementBy..

/*
document.getElementsByName(name) возвращает элементы с
заданным атрибутом name.Очень редко используется.
Поиск полько внутри document.
*/
/*
const elems = document.getElementsByName('list');
console.log(elems);
*/

//---------------------

// Живая статическа коллекции
/*
// Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.lesson__item-list');

// Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('lesson__item-list');

console.log(listStatic);
console.log(listLive);


// Создаем новый HTML-объект.
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новый пункт</li>'
);
*/
//---------------------

//closest
/*
Метод elem.closest(css) ищет ближайшего предка,
который соответствует CSS - селектору.Сам элемент
также включается в поиск.

Предки элемента это родитель, родитель родителя,
его родитель и так далее.Вместе они образуют цепочку
иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх от
элемента и проверяет каждого из родителей.Если он
соответствует селектору, поиск прекращается. Метод возвращает
либо предка, либо null, если такой элемент не найден.

Напомню свойство parentElement возвращает только
непосредственного родителя элемента
*/
/*
const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);
*/
/*
Очень полезный метод, часто используется для проверки
на существование того или иного родителя, либо для изменения
родителя конкретного элемента
*/

//---------------------------

// Проверка matches
/*
ничего не ищет, а проверяет, удовлетворяет ли
элемент CSS-селектору, и возвращает true или false.
*/
/*
const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}
*/

//---------------------------

/*
Стоит добавить, что получив объект тем или иным способом
мы можем применять свойства навигации о которых говорили ранее
*/
/*
const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
*/

//========================================================================================================================================================

// Изменение документа

/*
// Cодержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.innerHTML);
*/

//====================

/*
// Cодержимое элемента целиком outerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
const textElementContent = textElement.outerHTML;
console.log(textElementContent);


textElement.outerHTML = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.outerHTML);
*/

//====================

// Просто текст элемента textContent
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);
*/
/*
Полезная возможность textContent - записывать
текст «безопасным способом».
*/
/*
textElement.textContent = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.textContent);
*/
/*
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код.
Присваивание через textContent – один из способов от
этого защититься.
*/

//====================

/*
// data.
// Cодержимое текстового узла/комментария

// Получаем объект
const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;

console.log(getComment);
console.log(getComment.data);


// Изменение текстового узла/комментария
getComment.data = 'Привет';
console.log(getComment.data);
*/

//=====================

/*
// Создание элементов и узлов.

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);
*/
/*
Созданные объекты находятся в константах,
но не являются частью документа
*/

//===================

// Методы вставки

/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;

*/

// Вставляем новый элемент...

//...перед объектом
//textElement.before(newElement);
//...после объекта
//textElement.after(newElement);
//...внутрь и в начало объекта
//textElement.prepend(newElement);
//...внутрь и в конец объекта
//textElement.append(newElement);

// Вставка нескольких фрагментов сразу
//textElement.append(newElement, "Привет!");

/*
// Можно вставлять строку
textElement.append(`Живи, а работай в
	<span class="yellow">свободное</span> время!`);
*/
/*
Другими словами, строки вставляются безопасным способом,
как делает это textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тегами и прочим,
как это делает innerHTML?
*/

//-------------------

// insertAdjacentHTML/Text/Element
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);
*/
/*
"beforebegin" – вставить html непосредственно перед textElement,
"afterbegin" – вставить html в начало textElement,
"beforeend" – вставить html в конец textElement,
"afterend" – вставить html непосредственно после textElement.
*/

//--------------
/*
Дополнительно существуют
insertAdjacentText и insertAdjacentElement
*/
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Вставляем текст
textElement.insertAdjacentText(
	'beforeend',
	`Живи, а работай в
	<span class="yellow">свободное</span> время!`
)
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;

// Вставляем элемент
textElement.insertAdjacentElement(
	'beforeend',
	newElement
);
*/
/*
На практике часто используется только insertAdjacentHTML.
Потому что для элементов и текста у нас есть методы
append/prepend/before/after – их быстрее написать,
и они могут вставлять как узлы, так и текст.
*/
//=========================================

// Перенос элемента

/*
Мы можем вставлять не только новые узлы,
но и переносить существующие.
Все методы вставки автоматически
удаляют узлы со старых мест.
*/
/*
// Получаем объект
const lessonBlock = document.querySelector('.lesson');
// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);
*/

//=========================================

// Клонирование узлов cloneNode

/*
Если нужен не перенос а именно копия элемента
*/
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Клонирование без дочерних элементов
//const cloneTextElement = textElement.cloneNode();

// Глубокое клонирование вместе с содержимым
const cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
*/

//=========================================

/*
// Удаление узлов

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Удаляем объект
textElement.remove();
*/

//========================================================================================================================================================

// Стили и классы

// Управление классами
// Свойства className и classList

/*
Изменение класса является одним
из наиболее часто используемых действий в JavaScript.
*/

/*
// Свойство className

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Получаем имена классов
const elementClassNames = element.className;
console.log(elementClassNames);

// Перезаписываем имя класса
element.className = "red";
*/

//-----------------------------

// Свойство classList
/*
Специальный объект с методами для добавления/удаления
одного класса.
*/

// Получаем элемент
//const element = document.querySelector('.lesson__item-list_red');

/*
// Добавить класс
element.classList.add('active');
// Удалить класс
element.classList.remove('active');
// Добавить класс, если его нет, а если есть удалить.
element.classList.toggle('active');
// Проверка наличия класса, возвращает true/false.
element.classList.contains('active');
*/

/*
// Добавляем класс
element.classList.add('active');
// Проверяем наличие класса
if (element.classList.contains('active')) {
	console.log(`У element есть класс active!`);
}*/

//classList является перебираемым, поэтому можно
//перечислить все классы при помощи for..of
/*
for (let className of element.classList) {
	console.log(className);
}
*/

//---------------------------------------------------

// Управление стилями

// element.style

/*
// Задаем стиль с помощью CSS свойства
element.style.color = "red";

// Для свойства из нескольких слов используется camelCase:
// margin-bottom
element.style.marginBottom = "30px";
// z-index
element.style.zIndex = "10";
// и т.д.

// Каждое свойство пишется отдельно

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom);

// Сброс стиля
element.style.marginBottom = "";

//---------------
*/

/*
//Полная перезапись стилей
//style.cssText

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
	margin-bottom: 30px;
	color:red;
`;
*/

// -----

//Вычисленные стили. getComputedStyle(element, [pseudo])

/*
// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.fontSize);

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);
*/

/*
// Чтобы получить конкретное значение
// Следует писать точное (полное) свойство

// Получаем точное значение
console.log(elementStyle.paddingLeft);
// Получаем не предсказуемую запись
console.log(elementStyle.padding); // В FF <empty string>
*/

/*
// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);

//Только для чтения
elementStyle.paddingLeft = "50px";
*/


/*
// Лайвхаки

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingLeft);

//Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);


//Помним про единицы измерения
element.style.marginLeft = "20px";
*/

/*
Как мы уже поняли, из JS мы можем управлять как классами
так и стилями объекта.

Управлять классами – более приоритетный вариант по
сравнению со стилями.

Манипулировать свойством style следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету.

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путем манипуляции с классами,
то так и следует сделать!
*/

//========================================================================================================================================================

// Атрибуты и свойства

/*
У разных DOM-элементов могут быть разные свойства.
Например, у тега <a>, есть свойства, связанные со ссылками,
а у тега <input> – свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM-объекты для тегов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу.
*/
/*
const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(input.value);
console.log(link.value);

//Получить список доступных свойств
console.dir(link);
*/
//---------------------------

// Произвольные атрибуты

//Получаем элемент
//const lessonText = document.querySelector('.lesson__text');
/*
//Проверяем наличие атрибута.
lessonText.hasAttribute('name');
//Получаем значение атрибута.
lessonText.getAttribute('name');
//Устанавливаем значение атрибута.
lessonText.setAttribute('name', 'value');
//Удаляем атрибут.
lessonText.removeAttribute('name');
*/
/*
// Пример
// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}
*/

//------------------------------

// Синхронизация между атрибутами и свойствами

/*
Мы можем обратиться к тому или иному свойству через
методы доступа к атрибутам.
Когда стандартный атрибут изменяется, соответствующее
свойство автоматически обновляется.
Это работает и в обратную сторону (за некоторыми исключениями).
*/

//Получаем элемент
//const input = document.querySelector('.lesson__input');
/*
input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));
*/

// НО
/*
input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));
*/

//------------------------------

// Нестандартные атрибуты, dataset

/*
Мы уже использовали произвольные атрибуты,
но это рискованно.

Все атрибуты, начинающиеся с префикса «data-»,
зарезервированы для использования программистами.
Они доступны в свойстве dataset.
*/
/*
//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

//Получаем data-атрибут
console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

// data-size-value
console.log(lessonText.dataset.sizeValue);
*/

//------------------------------

// Полезные свойства
/*
const link = document.querySelector('.lesson__link');

//Получаем тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
link.hidden = true;
console.log(link.hidden);
*/


//========================================================================================================================================================
// e.target.tagName
//e.target.dataset
//e.target.hasAttribute("data-category-id")
//e.target.dataset.categoryId
//e.target.dataset.productId
//e.target.id === "buy-button"


//========================================================================================================================================================
// <!DOCTYPE html>
// <html lang="en">

// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Document</title>
// 	<style>
// 		.wrapper {
// 			display: grid;
// 			place-items: center;
// 			height: 100vh;
// 		}

// 		.container {
// 			display: grid;
// 			grid-template-columns: 1fr 2fr 2fr;
// 			place-items: center;
// 			gap: 1rem;
// 		}

// 		ul {
// 			list-style-type: none;
// 		}

// 		li {
// 			padding: 0.5rem;
// 			cursor: pointer;
// 		}

// 		li:active {
// 			color: blue;
// 		}

// 		button {
// 			padding: 0.5rem 2rem;
// 			margin: 1rem 0;
// 			cursor: pointer;
// 		}
// 	</style>
// </head>

// <body>
// 	<div class="wrapper">
// 		<div class="container">
// 			<ul id="categories">
// 				<li data-category-id="1">Toys</li>
// 				<li data-category-id="2">Sports</li>
// 				<li data-category-id="3">Toys</li>
// 				<li data-category-id="4">Grocery</li>
// 				<li data-category-id="5">Garden</li>
// 			</ul>
// 			<ul id="products">
// 			</ul>
// 			<div>
// 				<div id="description">
// 				</div>
// 				<button id="buy-button">Buy</button>
// 				<div id="message">The product has been added to the basket</div>
// 				<div class="form" hidden>
// 					<form action="/" id="form" method="GET" class="form__body" onsubmit="onSubmit(event);" name="form">
// 						<h1 class="form__title">Замовлення</h1>
// 						<p class="form__item">
// 							<input id="formName" name="inputFullname" type="text" class="form__input" placeholder="Full name">
// 						</p>
// 						<p>
// 							City:
// 							<select name="City">
// 								<option selected>Odessa</option>
// 								<option>Morocco</option>
// 								<option>Jerusalem</option>
// 							</select>
// 						</p>
// 						<p class="form__item">
// 							<label class="form__label" for="mailWarehouse">- Склад Нової</label>
// 							<input class="form__input" id="mailWarehouse" name="mailWarehouse" type="number" min="1">
// 						</p>
// 						<p class="form__item">
// 							- Спосіб оплати:
// 							<br>
// 							<label class="form__label" for="formEmail">післяплата</label>
// 							<input type="radio" checked id="formEmail" value="afterPayment" name="afterPayment" class="form__input">
// 							<label class="form__label" for="formTel">на банківську картку</label>
// 							<input type="radio" id="formTel" value="beforePayment" name="afterPayment" class="form__input">
// 						</p>
// 						<p class="form__item">
// 							<label class="form__label" for="numberOfGoods">- Кількість продукції, що купується</label>
// 							<input class="form__input" id="numberOfGoods" name="numberOfGoods" type="number" min="1">
// 						</p>
// 						<button type="submit" class="form__button">Надіслати запит</button>
// 					</form>
// 				</div>
// 			</div>
// 			<section hidden></section>
// 			<section id="error"></section>
// 		</div>
// 	</div>
// 	<script src="js-modules/homework-0031.js"></script>
// </body>

// </html>
// <!DOCTYPE html>
// <html lang="en">

// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Document</title>
// 	<style>
// 		        .wrapper {
//             display: grid;
//             place-items: center;
//             height: 100vh;
//         }

//         .container {
//             width: 100%;
//         }

//         td {
//             height: 2rem;
//             width: 4rem;
//             border: 1px solid black;
//             text-align: center;
//         }
// 		.form__input {
// 			background: rgb(234, 255, 0);
// 			padding: 1rem;
// 			max-width:  100%;
// 		}
// 		form {
// 			background: rgb(234, 255, 0);

// 			max-width:  100%;
// 		}
// 		p {
// 			display: flex;
//     justify-content: space-between;
//     align-items: baseline;
//     max-width: 100%;
//     align-content: stretch;

// 		}

// 		body {
// 			background: #1870bd;
// 			display: flex;
// 			justify-content: center;
// 			align-items: center;
// 		}
// 	</style>
// </head>

// <body>
// 	<div class="wrapper">
// 		<div class="container">
// 			<div class="form">
// 		<form action="/" id="form" method="GET" class="form__body" name="form">
// 			<h1 class="form__title">Ми хотіли б Вам допомогти</h1>
// 			<p class="form__item">
// 				<label for="formName">- Ім'я, Прізвище</label>
// 				<input id="formName" name="firstNameLastName" type="text" class="form__input" placeholder="- Ім'я, Прізвище"
// 				 >
// 			</p>
// 			<p class="form__item">
// 				<label for="dateOfBirth">- Дата народження</label>
// 				<input id="dateOfBirth" name="data" type="text" class="form__input" placeholder="- Дата народження"
// 				 >
// 			</p>
// 			<p class="form__item">
// 				<span>- Стать:</span>
// 				<br>
// 				<label class="form__label" for="man">man</label>
// 				<input type="radio" checked id="man" value="man" name="gender" class="form__input">
// 				<label class="form__label" for="woman">woman</label>
// 				<input type="radio" id="woman" value="woman" name="gender" class="form__input">
// 			</p>
// 			<p>
// 				<span>- Місто :</span>
// 				<br><br>
// 				<select name="citi" class="form__input">
// 					<option value="Jerusalem" selected>Jerusalem</option>
// 					<option value="Morocco">Morocco</option>
// 					<option value="Odessa">Odessa</option>
// 				</select>
// 			</p>
// 			<p class="form__item">
// 				<label class="form__label" for="adress">- Адреса</label>
// 				<textarea name="ADRESS" id="adress" class="form__input" placeholder="- Адреса">Адреса</textarea>
// 			</p>
// 			<p class="form__item">
// 				<span>- Мови, якими володіє:</span>
// 				<br><br>
// 				<label class="form__label" for="china">Китайский</label>
// 				<input class="form__input" id="china" name="china" type="checkbox">
// 				<label class="form__label" for="inglish">Англиский</label>
// 				<input class="form__input" id="inglish" name="inglish" type="checkbox">
// 			</p>
// 			<button type="submit" class="form__button">Save</button>
// 		</form>
// 	</div>
// 		</div>
// 	</div>
// 	<script src="js-modules/homework-0030.js"></script>
// </body>
// </html>
// .toISOString().split('T')[0]   "Integer ac leo. Pellentesque ultrices mattis odio."
// const productObj = products.find(el => el.description == messageHtml.innerHTML)
// console.log(productObj);
// /^\d{2}(-?)\d{2}\1\d{2}\1\d{2}$/
function validateUsr(username) {
  res =  /^[a-z\d_]{4,16}/.test(username) 
  return res
}
console.log(validateUsr(username));