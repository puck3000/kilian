// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');



// var input = 'assets/sass/main.scss';
// var output = 'assets/css/build.css';



// gulp.task('sass', function () {
// 	return gulp.src(input)
// 	  .pipe(sass())
// 	  .pipe(gulp.dest(output));
// });



var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


var input = 'assets/sass/main.scss';
var output = 'assets/css/build';



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init();

    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("input")
        .pipe(sass())
        .pipe(gulp.dest("output"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);