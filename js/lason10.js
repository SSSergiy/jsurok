// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов.

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let result = arr.reduce(function(sum, elem) {
// 	if (elem >= 0) {
// 		return sum + elem;
// 	} else {
// 		return sum;
// 	}
// });
// console.log(result);

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let kol = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0){
// 			kol++;
//     }
// }
// console.log(kol);

// Найти максимальный элемент массива и его порядковый номер.
// let array = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47
// ];
// console.log(array.indexOf(Math.max(...array)), Math.max(...array));



// var max = getMaxValue(array);
// function getMaxValue(array) {
//   var max = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (max < array[i]) max = array[i];
//   }
//   return max;
// }
// console.log(max);


// // Найти минимальный элемент массива и его порядковый номер.
// let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// console.log(array.indexOf(Math.min(...array)), Math.min(...array));

// var min = getMinValue(array);
// function getMinValue(array){
//     var min = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (min > array[i]) min = array[i];
//     }
//     return min;
// }
// console.log(min);

// Определить количество отрицательных элементов.
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let kol = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0){
// 			kol++;
//     }
// }
// console.log(kol);

// Найти количество нечетных положительных элементов.
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let kol = 0;
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 > 0)
// 			kol++;
// 		}
// console.log(kol);

// Найти количество четных положительных элементов.
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let kol = 0;
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 === 0)
// 			kol++;
// 		}
// console.log(kol);

// Найти сумму четных положительных элементов.
// let arr = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47];
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 === 0) {
// 		sum += arr[i];
// 	}
// }
// console.log(sum);

// Найти сумму нечетных положительных элементов.
// let arr = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47];
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] % 2 > 0) {
// 		sum += arr[i];
// 	}
// }
// console.log(sum);

// Найти произведение положительных элементов.
// let arr = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47];
// let sum = 1;
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) {
// 		sum *= arr[i];
// 	}
// }
// console.log(sum);

// Найти наибольший среди элементов массива, остальные обнулить.
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let max = arr[0];
// let maxi = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     arr[maxi] = 0;
//     maxi = i;
//   } else {
//     arr[i] = 0;
//   }
// }
// console.log(arr);
