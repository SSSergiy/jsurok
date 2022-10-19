// Реализуйте функцию removeElement(array, item),
//  чтобы удалить элемент item из массива array.
const array = [1, 2, 3, 4, 5, 6, 7];
let removeElement;
function func(arra, item) {
  const index = arra.indexOf(item);
  if (index !== -1) {
    arra.splice(arra.indexOf(item), 1);
  }
  console.log(arra);
}
removeElement = func;
removeElement(array, 5);
console.log(array);
