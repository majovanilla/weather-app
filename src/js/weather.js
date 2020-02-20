import { renderSearch } from './render';

const weatherApp = (params) => {
  const { city, country, units } = params;
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const id = '&APPID=092878e572bdc25b4b5bdea6cbd439db';
  const deg = units === 'farenheit' ? '&units=imperial' : '&units=metric';
  const far = '&units=imperial';
  const cel = '&units=metric';
  // const lang = '&lang={lang}'
  const forecastPromise = fetch(`${url}${city},${country}${deg}${id}`, { mode: 'cors' });
  // const forecastPromiseCel = fetch(`${url}${city},${country}${cel}${id}`, { mode: 'cors' });
  // const forecastPromiseFar = fetch(`${url}${city},${country}${far}${id}`, { mode: 'cors' });

  const setCache = (response) => {
    console.log('set cache')
    console.log(response)
    localStorage.setItem(`${city}-${units}`, JSON.stringify(response));
  };

  const getCache = () => {
    const diff = 30 * 60 * 1000;
    const cache = JSON.parse(localStorage.getItem(`${city}-${units}`));
    if (cache && (Date.now() - cache.list[0].dt * 1000) < diff) {
      console.log('get cache')
      console.log(cache)
      return cache;
    }
    localStorage.removeItem(JSON.stringify(`${city}-${units}`));
    console.log('delete cache')
    console.log(`${city}-${units}`)
    return false;
  };

  // const checkUnitCall = (units) => {
  //   console.log('cheching units: ')
  //   console.log(units)
  //   return units === 'farenheit' ? forecastPromiseFar : forecastPromiseCel;
  // };

  const processData = (data) => {
    console.log('processData')
    const currentData = {
      dt: data.list[0].dt,
      date: data.list[0].dt_txt,
      timeOffset: data.city.timezone,
      description: data.list[0].weather[0].description,
      city: data.city.name,
      country: data.city.country,
      temp: data.list[0].main.temp,
      icon: data.list[0].weather[0].icon,
      code: data.list[0].weather[0].id,
    };

    const forecastData = {
      day1: {
        dt: data.list[8].dt,
        date: data.list[8].dt_txt,
        description: data.list[8].weather[0].description,
        temp: data.list[0].main.temp,
        icon: data.list[8].weather[0].icon,
      },
      day2: {
        dt: data.list[16].dt,
        date: data.list[16].dt_txt,
        description: data.list[16].weather[0].description,
        temp: data.list[16].main.temp,
        icon: data.list[16].weather[0].icon,
      },
      day3: {
        dt: data.list[24].dt,
        date: data.list[24].dt_txt,
        description: data.list[24].weather[0].description,
        temp: data.list[24].main.temp,
        icon: data.list[24].weather[0].icon,
      },
      day4: {
        dt: data.list[32].dt,
        date: data.list[32].dt_txt,
        description: data.list[32].weather[0].description,
        temp: data.list[32].main.temp,
        icon: data.list[32].weather[0].icon,
      },
    };

    renderSearch(currentData, forecastData);
  };

  const makeCall = () => {
    const cache = getCache();
    const call = forecastPromise;
    // const call = checkUnitCall();

    if (cache) {
      processData(cache);
    } else {
      console.log('making call')
      console.log(call)
      call.then((response) => response.json())
        .then((response) => {
          if (response.cod === '200') {
            setCache(response);
            processData(response);
          } else {
            // eslint-disable-next-line no-alert
            alert('Location not found. Please search again');
          }
        });
    }
  };

  makeCall();
};

export { weatherApp as default };
