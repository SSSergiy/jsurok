// Эта дз состоит из четырех небольших задач, за реализацию каждой из них можно получить 25 баллов:

// -Дан массив с элементами разных типов.
//  Создать функцию которая высчитывает среднее арифметическое
//  только числовых элементов данного массива.

// const array = [1, NaN, 3, 6, 7, 4, 'oien', 2, 'ooien', 5, 'oien'];
// function example(arr) {
//   let amountInt = 0;
//   let summa = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!isNaN(arr[i])) {
// 			amountInt++;
// 			summa += arr[i];
//     }
//     var resalt = summa / amountInt;
// 	}
// 	return resalt;
// }
// console.log(example(array));

// -Написать функцию doMath(x, znak, y),
// которая получает 3 аргумента: числа x и y,
// 	строку znak.В переменной znak может быть: +, -, *, /, %, ^ (степень).
// 	 Вывести результат математического действия, указанного в переменной znak.
// 	 Оба числа и знак получаются от пользователя.
// function calcc(x, y, znak) {
//   x = +prompt('первое число');
//   y = +prompt('второе число');
//   znak = prompt('оператор (/,+,*,-,^,%)');
// 	result = 0;
//   if (znak === '-') {
// 		result = x - y;
// 		return result;
//   }
//   if (znak === '*') {
// 		result = x * y;
// 		return result;
//   }
//   if (znak === '/') {
// 		result = x / y;
// 		return result;
//   }
//   if (znak === '^') {
// 		result = x ** y;
// 		return result;
//   }
//   if (znak === '+') {
// 		result = x + y;
// 		return result;
// 	}
// 	else (znak === '%')
//   result = x % y;
//   return result;
// }
// console.log(calcc());

// -Написать функцию заполнения пользовательскими данными двумерного массива.
// Длину основного массива и внутренних массивов задаёт пользователь.
// Значения всех элементов всех массивов задаёт пользователь.

// function arrAdd() {
// 	let arr = [];
// 	let amount = +prompt("Введите количество елементов в первом массиве");
// 	for (let i = 0; i < amount; i++) {
// 		let vn = +prompt("znachenie");
// 		arr.push([vn]);
// 	}
// 	for(let i = 0; i < amount; i++) {
// 			let amount2 = +prompt("Введите количество елементов в " + (i + 1) + " массиве");
// 		for (let i = 0; i < amount2; i++) {
// 		let vv = +prompt("znachenie");
// 				arr[i].push([vv]);
// 			}
// 	}
// 	console.log(arr);
// }
// let functionResult = arrAdd();
///////////////////////////////////////////////////////////////////////////////////
//  const mainN = prompt('Введите длину главного массива');
//  const subN = prompt('Введите длину внутренних массивов');
//  const arr = new Array(+mainN).fill(0)
//    .map((_, ind) =>
//      new Array(+subN).fill(0).map((_, i) => prompt(`Введите элемент ${i} в подмассиве ${ind}`)));
//  alert('Ваш массив:' + arr.map(subArr => '\n' + subArr));
////////////////////////////////////////////////////////////////////////////////////////////////////

// -Создать функцию, которая убирает из строки все символы,
// которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor".
// Исходную строку и символы для удаления задаёт пользователь
// function func (a, b) {
// 	let ggg = a.split('');
// 	for(let i = 0; i<b.length; i++){
// 			for(let j = 0; j<a.length; j++) {
// 					if(b[i] == a[j]){
// 							ggg.splice(ggg.indexOf(b[i]),1)
// 					};
// 			}
// 	}
// 	console.log(ggg.join(''));
// };
// func('hello world', ['l', 'd']);