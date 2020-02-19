import { local, getBackground } from './helpers';

const renderPage = () => {
  const mainBackground = document.querySelector('.main-image');
  const forecast = document.querySelector('.forecast');
  forecast.classList.add('hidden');
  mainBackground.src = getBackground('default');
};

const renderSearch = (currentData, forecastData) => {
  console.log(currentData)
  console.log(currentData.code)
  console.log(forecastData)
  const mainBackground = document.querySelector('.main-image');
  const degSymbol = '°';
  const celcius = document.querySelector('.celcius');
  const farenheit = document.querySelector('.farenheit');
  const description = document.querySelector('.description');
  const city = document.querySelector('.city');
  const time = document.querySelector('.time');
  const date = document.querySelector('.date');
  const icon = document.querySelector('.icon');
  const switchTemp = document.querySelector('.switchTemp');
  mainBackground.src = getBackground(currentData.code).toString();

  const main = () => {
    celcius.innerHTML = `${currentData.cTemp.toFixed()} ${degSymbol} `;
    farenheit.innerHTML = `${currentData.fTemp.toFixed()} ${degSymbol} `;
    description.innerHTML = currentData.description;
    city.innerHTML = currentData.city;
    const dateFn = new Date(`${currentData.date} UTC`);
    const weekDay = local.days[new Date(`${currentData.date} UTC`).getDay()];
    const month = local.months[new Date(`${currentData.date} UTC`).getMonth()];
    const day = new Date(`${currentData.date} UTC`).getDay();
    const hour = dateFn.getHours();
    const minutes = (dateFn.getMinutes() < 10 ? '0' : '') + dateFn.getMinutes();
    time.innerHTML = `${hour}: ${minutes} `;
    date.innerHTML = `${weekDay}, ${month} ${day} `;
    icon.src = `http://openweathermap.org/img/wn/${currentData.icon}@2x.png`;
  };

  const aside = () => {
    const far = document.createElement('button');
    const cel = document.createElement('button');
    far.innerHTML = '°F';
    cel.innerHTML = '°C';
    switchTemp.innerHTML = '';
    switchTemp.append(far);
    switchTemp.append(cel);

    Object.keys(forecastData).forEach((day) => {
      const forecast = document.querySelector('.forecast');
      forecast.classList.toggle('hidden');
      const li = document.createElement('li');
      const tempDiv = document.createElement('div');
      const dayTempCel = document.createElement('p');
      const dayTempFar = document.createElement('p');
      const dayImg = document.createElement('img');
      const list = document.querySelector('.forecast-list');
      const asideDate = local.days[new Date(`${forecastData[day].date} UTC`).getDay()];
      const dayDate = document.createElement('p');
      dayDate.textContent = asideDate;
      dayTempCel.innerHTML = forecastData[day].cTemp.toFixed() + degSymbol;
      dayTempFar.innerHTML = forecastData[day].fTemp.toFixed() + degSymbol;
      dayImg.src = `http://openweathermap.org/img/wn/${forecastData[day].icon}@2x.png`;
      li.classList.add('forecast-day');
      dayTempCel.classList.add('day-temp');
      dayTempFar.classList.add('day-temp');
      dayTempFar.classList.add('hidden');
      dayImg.classList.add('day-icon');
      dayDate.classList.add('day-date');
      tempDiv.classList.add('temp-div');
      tempDiv.append(dayImg);
      tempDiv.append(dayTempCel);
      tempDiv.append(dayTempFar);
      li.append(dayDate);
      li.append(dayTempCel);
      li.append(dayTempFar);
      li.append(tempDiv);
      list.append(li);
    });
  };
  main();
  aside();
};

// const eventHandler = () => {
//   const searchParams = document.getElementById('search-bar');
//   const searchButton = document.querySelector('button');
//   const switchTemp = document.querySelector('switchTemp');

//   const switchDegrees = (event) => {
//     const deg = event.target.textContent;

//     if (deg === '°F') {
//       renderPage.farenheit.classList.toggle('hidden');
//       renderPage.celcius.classList.toggle('hidden');
//     } if (deg === '°C') {
//       renderPage.farenheit.classList.toggle('hidden');
//       renderPage.celcius.classList.toggle('hidden');
//     }
//   };

//   // searchButton.addEventListener('click', getLocation);
//   // switchTemp.addEventListener('click', switchDegrees);
// };

export { renderPage, renderSearch };
