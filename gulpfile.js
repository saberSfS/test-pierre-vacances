'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  twig = require('gulp-twig'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  include = require('gulp-include'),
  htmlmin = require('gulp-htmlmin'),
  rename = require('gulp-rename');

gulp.task('twig', () => {
  return gulp.src(['./src/**/*.twig', '!./src/**/_*.twig'])
    .pipe(twig())
    .pipe(htmlmin({
      collapseWhitespace: true,
      caseSensitive: true,
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: false,
      decodeEntities: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      quoteCharacter: '"',
      removeComments: true,
      sortAttributes: true,
      sortClassName: true
    }))
    .pipe(rename((path) => {
      return {
        dirname: '',
        basename: path.basename,
        extname: ''
      }
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', () => {
  return gulp.src(['./src/**/*.js', '!./src/**/_*.js'])
    .pipe(include())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/scripts'));
});

gulp.task('styles', () => {
  return gulp.src(['./src/**/*.scss', '!./src/**/_*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('watchFiles', () => {
  gulp.watch(['./src/**/*.scss'], gulp.series('styles'));
  gulp.watch(['./src/**/*.js'], gulp.series('scripts'));
  gulp.watch(['./src/**/*.twig'], gulp.series('twig'));
});

gulp.task('default', gulp.series('twig', 'scripts', 'styles'));
gulp.task('watch', gulp.series('twig', 'scripts', 'styles', 'watchFiles'));
