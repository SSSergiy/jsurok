const disappearingValue = () => {
  const errorHtml = document.querySelector('.error');
  const errorAdd = () => {
    errorHtml.innerHTML = 'Error';
  };
  errorAdd();
  const errorHide = () => {
    errorHtml.innerHTML = '';
  };
  setTimeout(errorHide, 2000);
  return;
};
const showValue = () => {
  const a = document.querySelector('.form-control').value;
  if (/^\d{1,2}|100$/.test(a)) {
    function getPost(a) {
      return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${a}`)
          .then((response) => {
            if (response.status === 404) {
              disappearingValue();
              return reject(response);
            }
            return response.json();
          })
          .then((post) => resolve(post))
          .catch((err) => {
            return reject(err);
          });
      });
    }
    getPost(a).then((post) => {
      document.querySelector('.error').innerHTML =
        JSON.stringify(post);
    });
  }
};
const clickButton = () => {
  document.getElementById('button').addEventListener('click', showValue);
};
clickButton();

const showMessage = () => {
		const a = document.querySelector('.form-control').value;
			function getPost(a) {
				return new Promise((resolve, reject) => {
					fetch(`https://jsonplaceholder.typicode.com/posts/${a}/comments`)
						.then((response) => {
							if (response.status === 404) {
								disappearingValue();
								return reject(response);
							}
							return response.json();
						})
						.then((post) => resolve(post))
						.catch((err) => {
							return reject(err);
						});
				});
			}
			getPost(a).then((post) => {
				document.querySelector('.errorr').innerHTML =
					JSON.stringify(post);
			});

};
const clickBtn = () => {
  document.getElementById('btn').addEventListener('click', showMessage);
};
clickBtn();
