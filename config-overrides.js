const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Assets': 'src/Assets/',
    '@Components': 'src/Components/',
    '@Utils': 'src/Utils/',
    '@Pages': 'src/Pages/',
    '@Services': 'src/Services/',
    '@Store': 'src/Store/',
    '@Routes': 'src/Routes/'
  })(config);

  return config;
};