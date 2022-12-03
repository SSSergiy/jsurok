// const disappearingValue = () => {
//   const errorHtml = document.querySelector('.error');
//   const errorAdd = () => {
//     errorHtml.innerHTML = 'Error';
//   };
//   errorAdd();
//   const errorHide = () => {
//     errorHtml.innerHTML = '';
//   };
//   setTimeout(errorHide, 2000);
// };
function getPost(a) {
	return new Promise((resolve, reject) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${a}`)
			.then((response) => response.json())
			.then((post) => resolve(post))
			.catch((err) => reject(err));
	});
}

const showValue = () => {
  let a = 0;
  if (/^\d{1,2}|100$/gi.test(document.querySelector('.form-control').value)) {
    a = document.querySelector('.form-control').value;
		getPost(a).then((post) => console.log(post));
  } else {
		disappearingValue();
		a = ""
		getPost(a).then((post) => console.log(post));

    return;
  }
};
const clickButton = () => {
  document.getElementById('button').addEventListener('click', showValue);
};

clickButton();

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {  return response.json();})
//   .then((post) => {console.log(post);})
//   .catch((err) => {  console.log(err); });

// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((post) => resolve(post))
//       .catch((err) => reject(err));});
// }
// getPost(2).then((post) => console.log(post));

// const disappearingValue = () => {
//   const errorHtml = document.querySelector('.error');
//   const errorAdd = () => {
//     errorHtml.innerHTML = 'Error';
//   };
//   errorAdd();
//   const errorHide = () => {
//     errorHtml.innerHTML = '';
//   };
// 	setTimeout(errorHide, 2000);
// 	return
// };
// const showValue = () => {
// 	const a = document.querySelector('.form-control').value;
//   if (/^\d{1,2}|100$/.test(a)) {
//     function getPost(id) {
//       return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//           .then((response) => response.json())
//           .then((post) => resolve(post))
//           .catch((err) => reject(err));
//       });
//     }
//     getPost(a).then((post) => console.log(post));
//   }if(!/^\d{1,2}|100$/.test(a)) {
// 		disappearingValue();

//   }
//   // /^\d{1,2}|100$/.test(document.querySelector('.form-control').value)
//   // document.querySelector('.form-control').value.length > 3
//   // ?
//   // : document.querySelector('.form-control').value;
//   // const a = document.querySelector('.form-control').value;
// };

// const clickButton = () => {
//   document.getElementById('button').addEventListener('click', showValue);
// };

// clickButton();

// // fetch('https://jsonplaceholder.typicode.com/posts')
// //   .then((response) => {  return response.json();})
// //   .then((post) => {console.log(post);})
// //   .catch((err) => {  console.log(err); });

// // function getPost(id) {
// //   return new Promise((resolve, reject) => {
// //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
// //       .then((response) => response.json())
// //       .then((post) => resolve(post))
// //       .catch((err) => reject(err));});
// // }
// // getPost(2).then((post) => console.log(post));
