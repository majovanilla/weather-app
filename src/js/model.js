function weatherApi(params) {
  const { city, state, unit = 'celcius' } = params;
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const id = '&APPID=092878e572bdc25b4b5bdea6cbd439db';
  const cel = '&units=metric';
  const far = '&units=imperial';
  const forecastPromiseFar = fetch(`${url}${city},${state}${cel}${id}`, { mode: 'cors' });
  const forecastPromiseCel = fetch(`${url}${city},${state}${far}${id}`, { mode: 'cors' });

  const setCache = (response) => {
    localStorage.setItem(`${city}`, JSON.stringify(response));
  }

  const getCache = (city) => {
    return JSON.parse(localStorage.getItem(`${city}`));
  }

  const makeCall = () => {
    let call;
    let cache = getCache(city);
    if (cache) {
      return cache;
    } else {
      if (unit === 'farenheit') { call = forecastPromiseFar };
      call = forecastPromiseCel;
      return call.then(response => response.json())
        .then(response => {
          if (response.cod === '200') setCache(response)
        })
        .catch(alert('Please search again'));
    }
  }

  const currentData = () => {
    const data = makeCall();
    console.log(data)
    const info = {
      description: data.list[0].weather[0].description,
      city: data.list[0].name,
      country: data.list[0].sys.country,
      temperature: data.list[0].main.temp,
      icon: data.list[0].weather[0].icon,
    }
    return { info };
  }
  currentData();
}

export { weatherApi as default };