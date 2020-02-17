
const weatherApp = (params) => {
  const { city, state, unit } = params;
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const id = '&APPID=092878e572bdc25b4b5bdea6cbd439db';
  const cel = '&units=metric';
  const forecastPromiseCel = fetch(`${url}${city},${state}${cel}${id}`, { mode: 'cors' });

  const setCache = (response) => {
    localStorage.setItem(`${city}`, JSON.stringify(response));
  };

  const getCache = () => {
    const diff = 30 * 60 * 1000;
    const cache = JSON.parse(localStorage.getItem(`${city}`));
    if (cache && (Date.now() - cache.list[0].dt) < diff) {
      return cache;
    }
    localStorage.removeItem(JSON.stringify(`${city}`));
    return false;
  };

  const makeCall = () => {
    const cache = getCache();
    const call = forecastPromiseCel;

    if (cache) return cache;

    return call.then((response) => response.json()).then((response) => {
      if (response.cod === '200') setCache(response);
    });
    // .catch(alert('Please search again'));
  };

  function error(message) {
    const alertMessage = alert(message);
    return alertMessage;
  }

  const convertCelcius = (deg) => {
    const far = ((deg * 9) / 5) + 32;
    return far;
  };

  const processData = () => {
    const data = makeCall();

    const currentData = {
      dt: data.list[0].dt,
      date: data.list[0].dt_txt,
      description: data.list[0].weather[0].description,
      city: data.city.name,
      country: data.city.country,
      fTemp: convertCelcius(data.list[0].main.temp),
      cTemp: data.list[0].main.temp,
      icon: data.list[0].weather[0].icon,
      code: data.list[0].weather[0].id,
    };

    const forecastData = {
      day1: {
        dt: data.list[8].dt,
        date: data.list[8].dt_txt,
        description: data.list[8].weather[0].description,
        cTemp: data.list[0].main.temp,
        fTemp: convertCelcius(data.list[0].main.temp),
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
  return { processData };
};

export { weatherApp as default };
