const arr = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
const bodyHtml = document.querySelector('body');
let arrSmart = [];
function generateList(arr) {
  const ul = document.createElement('ul');
	for (let index = 0; index < arr.length; index++) {
		if (Array.isArray(arr[index])) {  //  element massuv
			arrSmart.push(`${arr[index - 1]}.`);
			ul.insertAdjacentHTML('beforeend', generateList(arr[index]).outerHTML);
		}
		if (!Array.isArray(arr[index])) {// ne massuv
				ul.insertAdjacentHTML('beforeend', `<li>${arrSmart.join("")}${arr[index]}</li>`);
    }
		if (arr[index] === arr.at(-1)) { ///   ostannii element massuvu
			arrSmart.pop()
		}
  }
  return ul;
}
bodyHtml.appendChild(generateList(arr));
