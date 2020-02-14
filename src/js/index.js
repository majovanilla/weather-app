import '../scss/style.scss';
// import weatherApi from './model';
import weatherApp from './controller';
import renderPage from './view';

weatherApp({ city: 'xalapa', state: 'veracruz', unit: 'celcius' });
