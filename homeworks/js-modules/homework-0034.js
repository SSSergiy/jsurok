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
