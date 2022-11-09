// Є текстове поле на сторінці.
// Під час фокусування на цьому полі збоку з'являється <div>.
//  При пропажі фокусу - <div> так само пропадає
// Стартові файли для проекту можна знайти за посиланням:
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw21
// <div class="wrapper">
//    <div class="container">
//	  	<input type="text" class="input">
//	  	<span class="ghost"></span>
//    </div>
// </div>

const input = document.querySelector(".input")
const ghost = document.querySelector(".ghost")
input.addEventListener("focus",() => ghost.removeAttribute("hidden"))         // delit atribute
input.addEventListener("blur", () => ghost.toggleAttribute("hidden"))         // add atribute