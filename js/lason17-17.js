function aaa() {
	let a = 0;
	return function (params) {
		a = a + params;
		return a;
	}
}
const a = aaa();
console.log(a(2));
console.log(a(2));
console.log(a(2));






function addFunction() {
  let sum = 0;
  return function (number) {
    sum = sum + number;
    console.log(sum);
  };
}
const sum = addFunction();
sum(3);
sum(5);
sum(20);
