// На сторінці є зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next.
//  Аналогічно з першим зображенням і кнопкою Prev.
let imgSlider = document.querySelector('img');
let prevBtn = document.querySelector('button:first-child');
let nextBtn = document.querySelector('button:last-child');
let accum = 0;
const pictureCoordinates = [
  './img/dog1.jpeg',
  './img/dog2.jpeg',
  './img/dog3.jpeg',
  './img/dog4.jpeg',
  './img/dog5.jpeg',
  './img/dog6.jpeg'
];
const eventClickNext = (e) => {
  imgSlider.setAttribute('src', pictureCoordinates[++accum]);
	if (pictureCoordinates[accum] !== './img/dog1.jpeg') {
			prevBtn.removeAttribute('hidden');
		}
  if (pictureCoordinates[accum] === './img/dog6.jpeg') {
    nextBtn.toggleAttribute('hidden');
	}
};
const eventClickPrev = (e) => {
	imgSlider.setAttribute('src', pictureCoordinates[--accum]);
	if (pictureCoordinates[accum] !== './img/dog6.jpeg') {
    nextBtn.removeAttribute('hidden');
	}
	if (pictureCoordinates[accum] === './img/dog1.jpeg') {
		prevBtn.toggleAttribute('hidden');
	}
};
nextBtn.addEventListener('click', eventClickNext);
prevBtn.addEventListener("click",eventClickPrev)