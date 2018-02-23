const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');


// service
gulp.task('serve', ['scss'], function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

// watch
gulp.task('watch', function () {
    gulp.watch("./scss/*.scss", ['scss']);
    gulp.watch("**.html").on('change', browserSync.reload);
});

// build scss
gulp.task('scss', function () {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'watch']);