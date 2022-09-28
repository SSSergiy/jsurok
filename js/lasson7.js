// ///////////-Вывести на страницу в одну строку через запятую числа от 10 до 20

// var str = "";
// for (var i = 10; i <= 20; i++) {
//     str += i + ", ";
// }
// console.log(str);

// ////////////////////-Вывести квадраты чисел от 10 до 20

// for (let i = 10; i <= 20; i++) {
// 	let b = i * i;
// 	console.log(b);
// }

// //////////////////-Вывести таблицу умножения на 7

// for (let i = 0; i <= 10; i++) {
// 	let seven = 7;
// 	let mult = i * seven;
// 	console.log(mult);
// }

// /////-Найти сумму всех целых чисел от 1 до 15

// let sum = 0;
// for (let i = 1; i <= 15; i++) {
// 	sum += i;
// }
// console.log(sum);

// // -Найти произведение всех целых чисел от 15 до 35

// let pro = 1;
// for (let i = 15; i <= 35; i++) {
// 	pro *= i;
// }
// console.log(pro);

// // -Найти среднее арифметическое всех целых чисел от 1 до 500

// let sum = 0;
// let div = 0;
// for (let i = 1; i <= 500; i++) {
// 	sum += i;
// 	div = sum / i;
// }
// console.log(div);

// // -Вывести сумму только четных чисел в диапазоне от 30 до 80

// let sum = 0;
// for (let i = 30; i <= 80; i = i+2) {
// 	sum += i;
// }
// console.log(sum);

// // -Вывести все числа в диапазоне от 100 до 200 кратные 3
// for (i = 100; i <= 200; i++) {
// 	if (i % 3 === 0) {
// 		console.log(i);
// 	}
// }

// // Дано натуральное число. Найти и вывести на страницу все его делители.

// let number = +prompt('Введите число');
// for (var i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// };

// // -Определить количество его четных делителей

// let number = + prompt('Введите число');
// let numberOfEvenDivisors = 1;
// for (var i = 1; i <= number; i++) {
// 	if (number % i === 0) {
// 		if (i % 2 === 0) {
// 			numberOfEvenDivisors++;
// 			// console.log(i);
// 		}
// 	}
// }
// console.log(numberOfEvenDivisors);

// // -Найти сумму его четных делителей
// let number = + prompt('Введите число');
// let numberOfEvenDivisors = 1;
// let sum = 0;
// for (var i = 1; i <= number; i++) {
// 	if (number % i === 0) {
// 		if (i % 2 === 0) {
// 			numberOfEvenDivisors++;
// 			sum = sum + i;
// 			console.log(i);
// 		}
// 	}
// }
// console.log(`количество чотных делителей = ${numberOfEvenDivisors} сума чотных делителей = ${sum}`);


// ////// -Напечатать полную таблицу умножения от 1 до 10
// let one = 1;
// let two = 2;
// let three = 3;
// let four = 4;
// let five = 5;
// let six = 6;
// let seven = 7;
// let eight = 8;
// let nine = 9;
// let ten = 10;
// let iter = 0;
// for (let i = 1; i <= 10; i++) {
// 	let multOne = i * one;
// 	let multTwo = i * two;
// 	let multThree = i * three;
// 	let multFour = i * four;
// 	let multFive = i * five;
// 	let multSix = i * six;
// 	let multSeven = i * seven;
// 	let multEight = i * eight;
// 	let multNine = i * nine;
// 	let multTen = i * ten;
// 	console.log(` ${one} * ${i} = ${multOne}; `);
// 	console.log(` ${two} * ${i} = ${multTwo}; `);
// 	console.log(` ${three} * ${i} = ${multThree}; `);
// 	console.log(` ${four} * ${i} = ${multFour}; `);
// 	console.log(` ${five} * ${i} = ${multFive}; `);
// 	console.log(` ${six} * ${i} = ${multSix}; `);
// 	console.log(` ${seven} * ${i} = ${multSeven}; `);
// 	console.log(` ${eight} * ${i} = ${multEight}; `);
// 	console.log(` ${nine} * ${i} = ${multNine}; `);
// 	console.log(` ${ten} * ${i} = ${multTen}; `);
// }
