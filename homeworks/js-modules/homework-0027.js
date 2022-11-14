const btnHtml = document.querySelector('#button');
const inputHtml = document.querySelector('input');
function goToPage() {
  let d = 'https://';
  if (inputHtml.value.split(':')[0] === 'https' || inputHtml.value.split(':')[0] === 'http') {
    location.href = inputHtml.value;
  } else {
    location.href = d + inputHtml.value;
  }
}
btnHtml.addEventListener('click', (e) => {
  goToPage();
});
