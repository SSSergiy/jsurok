// const reactions = ["👍", "👎", "💚", "💩", "🤣"];
// const container = document.querySelector(".container");
// const reactionElements = reactions.map((reaction) => {
//   const wrapper = document.createElement("div");
//   const button = document.createElement("button");
// 	button.classList.add("button")
//   button.innerText = reaction;
//   const counter = document.createElement("div");
//   counter.classList.add("counter");
//   counter.innerText = 0;
//   wrapper.append(button, counter);
//   return wrapper;
// });

// reactionElements.forEach((elem) => container.appendChild(elem));

// container.addEventListener("click", function (e) {
// 	if (e.target.classList.contains('button')) {
// 		e.target.nextSibling.innerHTML++
// 	}
// }, false)

// Якщо за числом йде підмасив, додавати це число,
// 	потім крапку, а потім поточний елемент підмасиву.
//  Ви можете розраховувати на коректність вхідних данинх
// 	- перед підмасивом обовʼязково має бути число.
// const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
// function a(arr) {
// 	const ul = document.createElement('ul');
	
//   for (let index = 0; index < arr.length; index++) {
// 		if(Array.isArray(arr[index])) {
// 			ul.insertAdjacentHTML('beforeend', a(arr[index]).outerHTML)
// 			a(arr[index])
// 		}
		
// 		else {
// 			ul.insertAdjacentHTML('beforeend', `<li>${arr[index]}</li>`)
// 			console.log(arr[index]);
// 		}
//     // if (!Array.isArray(arr[index])) {
//     //   console.log(ul);
//     //   ul.insertAdjacentHTML('beforeend', `<li>${arr[index]}</li>`);
//     // }
//     // if (Array.isArray(arr[index])) {
//     //   console.log(ul);
// 			// ul.insertAdjacentHTML('beforeend', a(arr[index]).outerHTML);
// 			// console.log(arr[index]);

//     // }
// 	}
// 	return ul
// }
// // a(listOfLists);
// console.log(a(listOfLists));

// const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
// const number =[1,2]

// const bodyHtml = document.querySelector('body')
// bodyHtml.appendChild(a(listOfLists))
// function a(arr) {

//    const ul = document.createElement('ul');

//    for (let index = 0; index < arr.length; index++) {
//       if (Array.isArray(arr[index])) {
//          ul.insertAdjacentHTML('beforeend', a(arr[index]).outerHTML)
//          a(arr[index])
//       }

//       else {
//          ul.insertAdjacentHTML('beforeend', `<li>${arr[index]}</li>`)
//       }

//    }
//    return ul
// }

// console.log(a(listOfLists));



// const btn = document.querySelector('#button');
// const inp = document.querySelector('input')
// function goToUrl (){
//     let protocol = 'https://'
//     if(inp.value.split(':')[0] ==='https' || inp.value.split(':')[0] ==='http'){
//         location.href = inp.value
//     } else{
//         location.href = protocol + inp.value
// 	}
// }
// btn.addEventListener('click', (e) => {
//     goToUrl()
// });

// const btnHtml = document.querySelector('#button');
// const inputHtml = document.querySelector('input');
// const nameProtocol = inputHtml.value.split(':')[0];
// function goToPage() {
//   let d = 'https://';
//   if (nameProtocol === 'https' || nameProtocol === 'http') {
//     location.href = inputHtml.value;
//   } else {
//     location.href = d + inputHtml.value;
//   }
// }
// btnHtml.addEventListener('click', (e) => {
//   goToPage();
// });
