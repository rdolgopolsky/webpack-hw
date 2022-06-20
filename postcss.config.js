const cssnano = require('cssnano');

module.exports = {
  plugins: [
    [
      "autoprefixer",
      {
        // Options
      },
    ],
    cssnano({
      preset: 'default',
    }),
  ],
};