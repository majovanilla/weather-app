// import processData from './controller';
import { local, getBackground } from './helpers';

const renderPage = () => {
  const degSymbol = '°';
  const mainBackground = document.querySelector('.main-image');
  const celcius = document.querySelector('.celcius');
  const farenheit = document.querySelector('.farenheit');
  const description = document.querySelector('.description');
  const city = document.querySelector('.city');
  const time = document.querySelector('.time');
  const date = document.querySelector('.date');
  const icon = document.querySelector('.icon');
  const forecast = document.querySelector('.forecast');
  const switchTemp = document.querySelector('.switchTemp');
  forecast.classList.add('hidden');
  const list = document.querySelector('.forecast-list');

  mainBackground.src = getBackground('default');

  return {
    degSymbol, mainBackground, celcius, farenheit, description, city, time, date, icon, forecast, switchTemp, list,
  };
};

const renderSearch = (processData) => {
  const { currentData, forecastData } = processData;
  renderPage.mainBackground.src = getBackground(currentData.code).toString();

  const main = () => {
    renderPage.celcius.textContent = `${currentData.cTemp.toFixed()} ${renderPage.degSymbol} `;
    renderPage.farenheit.textContent = `${currentData.fTemp.toFixed()} ${renderPage.degSymbol} `;
    renderPage.description.textContent = currentData.description;
    renderPage.city.innerHTML = currentData.city;
    const dateFn = new Date(`${currentData.date} UTC`);
    const weekDay = local.days[new Date(`${currentData.date} UTC`).getDay()];
    const month = local.months[new Date(`${currentData.date} UTC`).getMonth()];
    const day = new Date(`${currentData.date} UTC`).getDay();
    const hour = dateFn.getHours();
    const minutes = (dateFn.getMinutes() < 10 ? '0' : '') + dateFn.getMinutes();
    const far = document.createElement('button');
    const cel = document.createElement('button');
    far.textContent = '°F';
    cel.textContent = '°C';
    renderPage.switchTemp.append(far);
    renderPage.switchTemp.append(cel);
    renderPage.time.innerHTML = `${hour}: ${minutes} `;
    renderPage.date.innerHTML = `${weekDay}, ${month} ${day} `;
    renderPage.icon.src = `http://openweathermap.org/img/wn/${currentData.icon}@2x.png`;
  };

  const aside = () => {
    Object.keys(forecastData).forEach((day) => {
      const li = document.createElement('li');
      const tempDiv = document.createElement('div');
      const dayTemp = document.createElement('p');
      const dayImg = document.createElement('img');
      // const dayDescription = document.createElement('p');
      const asideDate = local.days[new Date(`${forecastData[day].asideDate} UTC`).getDay()];
      const dayDate = document.createElement('p');
      dayTemp.textContent = forecastData[day].temperature.toFixed() + renderPage.degSymbol;
      dayImg.src = `http://openweathermap.org/img/wn/${forecastData[day].icon}@2x.png`;
      // dayDescription.textContent = forecastData[day].description;
      dayDate.textContent = asideDate;
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
      renderPage.list.append(li);
      renderPage.forecast.classList.toggle('hidden');
    });
  };
  main();
  aside();
};

const eventHandler = () => {
  const searchParams = document.getElementById('search-bar');
  const searchButton = document.querySelector('button');
  const switchTemp = document.querySelector('switchTemp');

  const getLocation = () => ({
    city: (searchParams.value.match(/^(\w+ ?\w+[^,])/gi))[0],
    state: (searchParams.value.match(/\w+[^, ]$/gi))[0],
  });

  const switchDegrees = (event) => {
    const deg = event.target.textContent;

    if (deg === '°F') {
      renderPage.farenheit.classList.toggle('hidden');
      renderPage.celcius.classList.toggle('hidden');
    } if (deg === '°C') {
      renderPage.farenheit.classList.toggle('hidden');
      renderPage.celcius.classList.toggle('hidden');
    }
  };

  searchButton.addEventListener('click', getLocation);
  switchTemp.addEventListener('click', switchDegrees);
};

export { renderPage, renderSearch, eventHandler };
