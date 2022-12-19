// За допомогою ajax-запиту вивести погоду
// Request URL:
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&ç=metric&APPID=5d066958a60d315387d9492393935c19
// q=XXX - місто, для якого показати погоду
// units=metric - ми хочемо отримати градуси Цельсія, метри на секунду, а не Фаренгейта та фути
// APPID=5d066958a60d315387d9492393935c19 - треба використовувати цей ключ, щоб отримати відповідь
// Потрібно вивести наступні дані:
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість 
// speed – швидкість вітру
// deg - напрям у градусах
// icon - це назва файлу з іконкою, яка символізує поточну погоду
// Шлях до файлу з іконкою формується наступним чином:
// const imgUrl = `http://openweathermap.org/img/w/${icon}.png`
// Документація по API:
// https://openweathermap.org/current


const fetchData = async () => {
  const link =
    'http://api.openweathermap.org/data/2.5/weather?q=LVIV&ç=metric&APPID=5d066958a60d315387d9492393935c19';
  const result = await fetch(link);
  const data = await result.json();
  const {
    weather: [{ icon, description }],
    main: { temp, pressure, humidity },
    wind: { speed, deg }
  } = data;
	const objInfo = [{ icon, description, temp: Math.round(temp - 273), pressure, humidity, speed, deg }];
	console.log(objInfo);
  const imgUrl = `http://openweathermap.org/img/w/${icon}.png`;
  document.querySelector(
    'body'
  ).innerHTML = `<img src="${imgUrl}" width="184" height="184">`;
};
fetchData();
