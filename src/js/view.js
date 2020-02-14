// import processData from './controller';
import { local, getBackground } from './helpers';

const renderPage = (processData) => {
  const { currentData, forecastData } = processData;
  const degSymbol = '°';
  const mainBackground = document.querySelector('.main-image');

  const renderMain = () => {
    mainBackground.src = getBackground(currentData.code).toString();
    const temperature = document.querySelector('.degrees');
    const description = document.querySelector('.description');
    const city = document.querySelector('.city');
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const icon = document.querySelector('.icon');
    temperature.textContent = `${currentData.temperature.toFixed()} ${degSymbol} `;
    description.textContent = currentData.description;
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

  const renderForecast = () => {
    const list = document.querySelector('.forecast-list');
    Object.keys(forecastData).forEach((day) => {
      const li = document.createElement('li');
      const tempDiv = document.createElement('div');
      const dayTemp = document.createElement('p');
      const dayImg = document.createElement('img');
      // const dayDescription = document.createElement('p');
      const date = local.days[new Date(`${forecastData[day].date} UTC`).getDay()];
      const dayDate = document.createElement('p');
      dayTemp.textContent = forecastData[day].temperature.toFixed() + degSymbol;
      dayImg.src = `http://openweathermap.org/img/wn/${forecastData[day].icon}@2x.png`;
      // dayDescription.textContent = forecastData[day].description;
      dayDate.textContent = date;
      li.classList.add('forecast-day');
      dayTemp.classList.add('day-temp');
      dayImg.classList.add('day-icon');
      // dayDescription.classList.add('day-description');
      dayDate.classList.add('day-date');
      tempDiv.classList.add('temp-div');
      tempDiv.append(dayImg);
      tempDiv.append(dayTemp);
      li.append(dayDate);
      li.append(tempDiv);
      // li.append(dayDescription);
      li.append(tempDiv);
      list.append(li);
    });
  };
  renderMain();
  renderForecast();

};

export { renderPage as default };
