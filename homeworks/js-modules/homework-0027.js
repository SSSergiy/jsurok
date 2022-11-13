const btnHtml = document.querySelector('#button');
const inputHtml = document.querySelector('input');
const nameProtocol = inputHtml.value.split(':')[0];
function goToPage() {
  let d = 'https://';
  if (nameProtocol === 'https' || nameProtocol === 'http') {
    location.href = inputHtml.value;
  } else {
    location.href = d + inputHtml.value;
  }
}
btnHtml.addEventListener('click', (e) => {
  goToPage();
});
