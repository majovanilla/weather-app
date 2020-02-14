import def from '../img/default.jpg';
import day200 from '../img/2xx-day.jpg';
import day300 from '../img/3xx-day.jpg';
import day500 from '../img/5xx-day.jpg';
import day600 from '../img/6xx-day.jpg';
import day700 from '../img/7xx-day.jpg';
import day800 from '../img/800-day.jpg';
import day801 from '../img/80x-day.jpg';
import night200 from '../img/2xx-night.jpg';
import night300 from '../img/3xx-night.jpg';
import night500 from '../img/5xx-night.jpg';
import night600 from '../img/6xx-night.jpg';
import night700 from '../img/7xx-night.jpg';
import night800 from '../img/800-night.jpg';
import night801 from '../img/80x-night.jpg';

const local = {

  days: {
    0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat',
  },

  months: {
    0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sept', 9: 'Oct', 10: 'Nov', 11: 'Dec',
  },

  weatherPics: {
    200: {
      day: { src: day200, alt: 'Photo by Dan Meyers on Unsplash' },
      night: { src: night300, alt: 'Photo by Brianna Sante}llan on Unsplash' },
    },
    300: {
      day: { src: day500, alt: 'Photo by Florian Olivo on Unsplash' },
      night: { src: night500, alt: 'Photo by Ian Espinosa on Unsplash' },
    },
    500: {
      day: { src: day600, alt: 'Photo by Chandler Cruttenden on Unsplash' },
      night: { src: night600, alt: 'Photo by Valentin Müller on Unsplash}' },
    },
    700: {
      day: { src: day700, alt: 'Photo by Ricardo Gomez Angel on Unsplash' },
      night: { src: night700, alt: 'Photo by Aditya Vyas on Unsplash' },
    },
    800: {
      day: { src: day800, alt: 'Photo by Annie Spratt on Unsplash' },
      night: { src: night800, alt: 'Photo by Jake weirick on Unsplash' },
    },
    801: {
      day: { src: day801, alt: 'Photo by Joonas Sild on Unsplash' },
      night: { src: night801, alt: 'Photo by Anandu Vinod on Unsplash' },
    },
  },
};

const getBackground = (code) => {
  const hour = new Date().getHours();
  const codeString = code.toString();
  let src;
  let time;
  // const src = code.match(/d/);
  if (hour >= 6 && hour <= 18) {
    console.log('day if');
    time = 'day';
  } else if (hour < 6 && hour > 18) {
    console.log('night if');
    time = 'night';
  }

  switch (codeString) {
    case '804':
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
    case '/8.[^0]/':
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
