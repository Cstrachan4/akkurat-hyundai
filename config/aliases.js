const path = require('path');

// Aliases for use in Webpack configuration
module.exports = {
  	styles: path.resolve(__dirname, '../public/styles/'),
  	components: path.resolve(__dirname, '../public/components/'),
  	assets: path.resolve(__dirname, '../public/assets/'),
    lib: path.resolve(__dirname, '../public/lib/'),
    sanity: path.resolve(__dirname, '../sanity/'),
  	'~': path.resolve(__dirname, '../public/'),
};
