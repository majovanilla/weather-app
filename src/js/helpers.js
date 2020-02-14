import day200 from '../img/default.jpg';

const local = {

  days: {
    0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat',
  },

  months: {
    0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sept', 9: 'Oct', 10: 'Nov', 11: 'Dec',
  },

  weatherPics: {
    200: {
      day: { src: '../img/2xx-day.jpg', alt: 'Photo by Dan Meyers on Unsplash' },
      night: { src: '../img/2xx-night.jpg../img/2xx.jpg', alt: 'Photo by Brianna Sante}llan on Unsplash' },
    },
    300: {
      day: { src: '../img/3xx-day.jpg', alt: 'Photo by Florian Olivo on Unsplash' },
      night: { src: '../img/3xx-night.jpg', alt: 'Photo by Ian Espinosa on Unsplash' },
    },
    500: {
      day: { src: '../img/5xx-day.jpg', alt: 'Photo by sanjiv nayak on Unsplash' },
      night: { src: '../img/5xx-night.jpg', alt: 'Photo by Valentin Müller on Unsplash}' },
    },
    700: {
      day: { src: '../img/7xx-day.jpg', alt: 'Photo by Ricardo Gomez Angel on Unsplash' },
      night: { src: '../img/6xx-night.jpg', alt: 'Photo by Aditya Vyas on Unsplash' },
    },
    800: {
      day: { src: '{require(../img/800-day.jpg)}', alt: 'Photo by Annie Spratt on Unsplash' },
      night: { src: '../img/800-night.jpg', alt: 'Photo by Jake weirick on Unsplash' },
    },
    801: {
      day: { src: '../img/80x-day.jpg', alt: 'Photo by Joonas Sild on Unsplash' },
      night: { src: '../img/80x.jpg', alt: 'Photo by Anandu Vinod on Unsplash' },
    },
  },
};

const getBackground = (code) => {
  const date = new Date().getHours();
  console.log(typeof date);
  console.log(typeof code);
  const codeString = code.toString();
  console.log(typeof codeString);
  let src;
  let time;
  // const src = code.match(/d/);
  if (date >= 6 && date < 7) {
    console.log('day if');
    time = 'day';
  } else if (date < 6 && date >= 7) {
    console.log('night if');
    time = 'night';
  }

  switch (codeString) {
    case '801':
      src = local.weatherPics[801][time].src;
      break;
    case /2../:
      src = local.weatherPics[200][time].src;
      break;
    case /3../:
      src = local.weatherPics[300][time].src;
      break;
    case /5../:
      console.log('entering 500 switch');
      src = local.weatherPics[500].src;
      break;
    case /6../:
      src = local.weatherPics[600][time].src;
      break;
    case /7../:
      src = local.weatherPics[700][time].src;
      break;
    case /8.[^0]/:
      console.log('entering 800 switch');
      src = local.weatherPics[800].day.src;
      break;
    default:
      src = '../img/default.jpg';
      break;
  }
  console.log('source final return: ' + src);
  return src;
};

export { local, getBackground };
