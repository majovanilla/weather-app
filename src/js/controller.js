import model from './model';
import * as view from './view';

const weatherController = () => {
  view.renderPage();

  const getData = () => {
    const params = view.eventHandler();
    console.log(params);

    if (params) {
      // const params = view.eventHandler();
      console.log(params);
      const data = model(params);
      console.log(data);
      view.renderSearch(data);
    }
    // return { weather };
  };
  return { getData };
};

export { weatherController as default };
