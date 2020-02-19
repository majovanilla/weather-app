import '../scss/style.scss';
import weatherApp from './weather';
import * as view from './render';

const weatherController = () => {
  const searchParams = document.getElementById('search-bar');
  const searchButton = document.querySelector('button');

  view.renderPage();

  const getLocation = () => {
    const params = {
      city: ((searchParams.value.match(/^(\w+ ?\w+[^,])/gi))[0]).toLowerCase(),
      state: ((searchParams.value.match(/\w+[^, ]$/gi))[0]).toLowerCase(),
    };
    weatherApp(params);
  };

  view.eventHandler();
  searchButton.addEventListener('click', getLocation);
};

weatherController();
