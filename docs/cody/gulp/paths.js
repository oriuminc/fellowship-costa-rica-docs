'use strict';

module.exports = {
  source: {
    templates: './src/templates/**/*.jade',
    slides: './src/slides/*.md',
    js: './src/js/**/*.js',
    styl: './src/styl/**/*.styl',
    img: './src/img/**/*',
    files: {
      jade: './src/templates/**/*.jade',
      styl: './src/styl/main.styl'
    }
  },

  browserSync: {
    html: './docs/**/*.html',
    css: './docs/css/**/*.css',
    js: './docs/js/**/*.js',
    img: './docs/img/**/*'
  },

  build: {
    html: './docs/',
    css: './docs/css',
    js: './docs/js',
    img: './docs/img',
  },

  deploy: {
    pages: './docs/**/*'
  }
};
