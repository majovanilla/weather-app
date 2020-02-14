import renderPage from './view';

const weatherApp = (params) => {
  const { city, state, unit } = params;
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const id = '&APPID=092878e572bdc25b4b5bdea6cbd439db';
  const cel = '&units=metric';
  const far = '&units=imperial';
  const forecastPromiseFar = fetch(`${url}${city},${state}${cel}${id}`, { mode: 'cors' });
  const forecastPromiseCel = fetch(`${url}${city},${state}${far}${id}`, { mode: 'cors' });

  const setCache = (response) => {
    localStorage.setItem(`${city}`, JSON.stringify(response));
  };

  const getCache = () => JSON.parse(localStorage.getItem(`${city}`));

  const makeCall = () => {
    let call;
    const cache = getCache(city);
    if (cache) {
      return cache;
    }
    if (unit === 'farenheit') {
      call = forecastPromiseFar;
    } else {
      call = forecastPromiseCel;
    }
    return call.then((response) => response.json())
      .then((response) => {
        if (response.cod === '200') setCache(response);
        // renderPage(data.current, data.forecast);
      })
      .catch(alert('Please search again'));
  };

  function error(message) {
    const alertMessage = alert(message);
    return alertMessage;
  }

  const processData = () => {
    const data = makeCall();
    const currentData = {
      dt: data.list[0].dt,
      date: data.list[0].dt_txt,
      description: data.list[0].weather[0].description,
      city: data.city.name,
      country: data.city.country,
      temperature: data.list[0].main.temp,
      icon: data.list[0].weather[0].icon,
      code: data.list[0].weather[0].id,
    };

    const forecastData = {
      day1: {
        dt: data.list[8].dt,
        date: data.list[8].dt_txt,
        description: data.list[8].weather[0].description,
        temperature: data.list[8].main.temp,
        icon: data.list[8].weather[0].icon,
      },
      day2: {
        dt: data.list[16].dt,
        date: data.list[16].dt_txt,
        description: data.list[16].weather[0].description,
        temperature: data.list[16].main.temp,
        icon: data.list[16].weather[0].icon,
      },
      day3: {
        dt: data.list[24].dt,
        date: data.list[24].dt_txt,
        description: data.list[24].weather[0].description,
        temperature: data.list[24].main.temp,
        icon: data.list[24].weather[0].icon,
      },
      day4: {
        dt: data.list[32].dt,
        date: data.list[32].dt_txt,
        description: data.list[32].weather[0].description,
        temperature: data.list[32].main.temp,
        icon: data.list[32].weather[0].icon,
      },
    };

    return { currentData, forecastData };

  };

  renderPage(processData());

};

export { weatherApp as default };
