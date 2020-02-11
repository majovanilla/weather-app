import weatherApi from './model'

const renderPage = (data) => {
  const renderMain = (data) => {
    const temperature = document.querySelector('.degrees');
    const description = document.querySelector('.description');
    const city = document.querySelector('.city');
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const degSymbol = '°';
    const icon = document.querySelector('.icon');
    temperature.innerHTML = `${data.temperature} ${degSymbol}`;
    description.innerHTML = data.description;
    city.innerHTML = data.city;
    const dateFn = new Date();
    time.innerHTML = dateFn.getHours() + ":" + dateFn.getMinutes();
    date.innerHTML = dateFn.toDateString();
    icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  }

  const renderForecast = (data) => {
    const temperature = document.querySelector('.degrees');
    const description = document.querySelector('.description');
    const city = document.querySelector('.city');
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const degSymbol = '°';
    const icon = document.querySelector('.icon');
    temperature.innerHTML = `${data.temperature} ${degSymbol}`;
    description.innerHTML = data.description;
    city.innerHTML = data.city;
    const dateFn = new Date();
    time.innerHTML = dateFn.getHours() + ":" + dateFn.getMinutes();
    date.innerHTML = dateFn.toDateString();
    icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  }
}

export { renderPage as default };