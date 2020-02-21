import '../scss/style.scss';
import weatherApp from './weather';
import * as view from './render';

const weatherController = () => {
  const searchParams = document.getElementById('search-bar');
  const search = document.querySelector('.switch-temp');

  view.renderPage();

  const getLocation = (event) => {
    const degSelected = event.target.id;
    const params = {
      city: ((searchParams.value.match(/^(\w+ ?\w+[^,])/gi))[0]).toLowerCase(),
      country: ((searchParams.value.match(/\w+[^, ]$/gi))[0]).toLowerCase(),
      units: degSelected,
    };
    weatherApp(params);
  };
  search.addEventListener('click', getLocation);
};

weatherController();
