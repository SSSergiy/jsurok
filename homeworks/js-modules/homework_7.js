// Создать массив, длину и элементы которого задаёт
// пользователь.
// Отсортировать массив по возрастанию.
// Удалить элементы из массива с 2 по 4 (включительно!).
// По мере изменений, выводить содержимое массива на
// страницу.

let mas = [];
console.log(mas);
let kol = +prompt('длинна масива');
console.log(mas);
for (let i = 0; i < kol; i++) {
	console.log(mas);
	let name = +prompt('цыфры в массиве');
	console.log(mas);
	mas.push(name);
	console.log(mas);
	mas.sort();
	console.log(mas);
}
console.log(mas);
  mas.splice(1, 3);
	console.log(mas);

