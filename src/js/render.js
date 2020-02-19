import { local, getBackground } from './helpers';

const DOM = {
  mainBackground: document.querySelector('.main-image'),
  sideBackground: document.querySelector('.side-image'),
  forecast: document.querySelector('.forecast'),
  switchTemp: document.querySelector('.switchTemp'),
  celcius: document.querySelector('.celcius'),
  farenheit: document.querySelector('.farenheit'),
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
  const switchTemp = document.querySelector('.switchTemp');
  DOM.mainBackground.src = getBackground(currentData.code).toString();
  DOM.sideBackground.src = getBackground(currentData.code).toString();

  const main = () => {
    DOM.celcius.innerHTML = `${currentData.cTemp.toFixed()}${degSymbol} `;
    DOM.farenheit.innerHTML = `${currentData.fTemp.toFixed()}${degSymbol} `;
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
    const switchBtn = document.createElement('button');
    switchBtn.classList.add('switch');
    switchBtn.innerHTML = '°F';
    switchTemp.innerHTML = '';
    switchTemp.append(switchBtn);
    DOM.forecast.classList.remove('hidden');
    const list = document.querySelector('.forecast-list');
    list.innerHTML = '';

    Object.keys(forecastData).forEach((day) => {
      const li = document.createElement('li');
      // const tempDiv = document.createElement('div');
      const dayTempCel = document.createElement('p');
      const dayTempFar = document.createElement('p');
      const dayImg = document.createElement('img');
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
      // tempDiv.classList.add('temp-div');
      li.append(dayDate);
      li.append(dayTempCel);
      li.append(dayTempFar);
      li.append(dayImg);
      // li.append(tempDiv);
      list.append(li);
    });
  };
  main();
  aside();
};

const eventHandler = () => {
  const switchBtn = document.querySelector('.switch');

  const switchDegrees = (event) => {
    const allTemp = document.querySelectorAll('.day-temp');
    console.log(allTemp);
    const button = event.target;

    if (button.textContent === '°F') {
      button.innerHTML = '°C';
    } else if (button.textContent === '°C') {
      button.innerHTML = '°F';
    }
    DOM.farenheit.classList.toggle('hidden');
    DOM.celcius.classList.toggle('hidden');
    allTemp.forEach((temp) => {
      // console.log(temp)
      temp.classList.toggle('hidden');
    });
  };

  const notFound = () => {
    DOM.searchBar.classList.add('error');
    setTimeout(() => {
      DOM.searchBar.classList.remove('error');
    }, 1000);
  };

  DOM.switchTemp.addEventListener('click', switchDegrees);

  // return { notFound };
};

export { renderPage, renderSearch, eventHandler };
