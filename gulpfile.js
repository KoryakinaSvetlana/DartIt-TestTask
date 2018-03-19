"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minifycss = require("gulp-csso");
var rename = require("gulp-rename");
var minifyjs = require("gulp-uglify");
var del = require("del");
var htmlmin = require('gulp-htmlmin');
var run = require('run-sequence');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

/*Сбор и минимизация стилей*/
gulp.task("style", function () {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minifycss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

/*Минимизация js*/
gulp.task('js', function () {
  return gulp.src('source/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', minifyjs()))
    .pipe(gulp.dest("build"));
});

/*Html*/
gulp.task("html", function () {
  return gulp.src("source/**/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"));
});

/*Copy*/
gulp.task("copy", function () {
  return gulp.src([
      "source/img/**",
      "source/app/**"
      ], {
      base: "source"
      })
    .pipe(gulp.dest("build"));
});

/*Clean*/
gulp.task("clean", function () {
  return del("build");
});

/*Build*/
gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "js",
    //"html",
    done
  );
});

/*Watch*/
gulp.task("serve", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html", ["html"]);
});
