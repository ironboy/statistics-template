import createMenu from './libs/createMenu.js';

createMenu('Malmö-temperaturer', [
  { name: 'Visa ett år', script: 'one-year.js' },
  { name: 'Jämför två år', script: 'compare-two-years.js' },
  { name: 'Hitta trender', script: 'trends.js' }
]);