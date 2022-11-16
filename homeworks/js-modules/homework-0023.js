// У папці `img` є зображення.
// При кожному завантаженні сторінки
// повинно виводитися випадково обране зображення.
const randoNumber = Math.floor(Math.random() * 6);
const img = document.querySelector("img")
const pictureCoordinates = [
	"./img/dog1.jpeg",
	"./img/dog2.jpeg",
	"./img/dog3.jpeg",
	"./img/dog4.jpeg",
	"./img/dog5.jpeg",
	"./img/dog6.jpeg",
]
img.setAttribute("src", pictureCoordinates[randoNumber]);