import { local, getBackground } from './helpers';

const DOM = {
  mainBackground: document.querySelector('.main-image'),
  sideBackground: document.querySelector('.side-image'),
  forecast: document.querySelector('.forecast'),
  searchBar: document.getElementById('search-bar'),
};

const renderPage = () => {
  DOM.forecast.classList.add('hidden');
  DOM.mainBackground.src = getBackground('default');
  DOM.sideBackground.src = getBackground('default');
};

const renderSearch = (currentData, forecastData) => {
  const degSymbol = '°';
  const description = document.querySelector('.description');
  const city = document.querySelector('.city');
  const time = document.querySelector('.time');
  const date = document.querySelector('.date');
  const icon = document.querySelector('.icon');
  const temp = document.querySelector('.degrees');
  DOM.mainBackground.src = getBackground(currentData.code, currentData.icon).toString();
  DOM.sideBackground.src = getBackground(currentData.code, currentData.icon).toString();

  const getTime = () => {
    const localTime = new Date();
    const localTimeInEpoch = localTime.getTime();
    const localUTCDiffInEpoch = (localTime.getTimezoneOffset()) * 60 * 1000;
    const UTC = localTimeInEpoch + localUTCDiffInEpoch;
    const cityTimeDiffInEpoch = (currentData.timeOffset) * 1000;
    return new Date(UTC + cityTimeDiffInEpoch);
  };

  const main = () => {
    temp.textContent = `${currentData.temp.toFixed()}${degSymbol} `;
    description.textContent = currentData.description;
    city.textContent = `${currentData.city}, ${currentData.country}`;
    const dateFn = getTime();
    const weekDay = local.days[dateFn.getDay()];
    const month = local.months[dateFn.getMonth()];
    const day = dateFn.getDate();
    const hour = dateFn.getHours();
    const minutes = (dateFn.getMinutes() < 10 ? '0' : '') + dateFn.getMinutes();
    time.textContent = `${hour}: ${minutes} `;
    date.textContent = `${weekDay}, ${month} ${day} `;
    icon.src = `http://openweathermap.org/img/wn/${currentData.icon}@2x.png`;
  };

  const aside = () => {
    DOM.forecast.classList.remove('hidden');
    const list = document.querySelector('.forecast-list');
    list.innerHTML = '';

    Object.keys(forecastData).forEach((day) => {
      const li = document.createElement('li');
      const temp = document.createElement('p');
      const dayImg = document.createElement('img');
      const asideDate = local.days[new Date(`${forecastData[day].date} UTC`).getDay()];
      const dayDate = document.createElement('p');
      dayDate.textContent = asideDate;
      temp.textContent = forecastData[day].temp.toFixed() + degSymbol;
      dayImg.src = `http://openweathermap.org/img/wn/${forecastData[day].icon}@2x.png`;
      li.classList.add('forecast-day');
      temp.classList.add('day-temp');
      dayImg.classList.add('day-icon');
      dayDate.classList.add('day-date');
      li.append(dayDate, temp, dayImg);
      list.append(li);
    });
  };
  main();
  aside();
};

export { renderPage, renderSearch };
