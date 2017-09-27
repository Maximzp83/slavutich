/**
 * Created by Max on 14.09.2017.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('test', function() {
 console.log('******** Hello! Gulp working normal! *************');
 });

gulp.task('sass-all', function () {
    return gulp.src(['sass/**/*.scss', 'sass/**/*.sass'])
        .pipe( sass({outputStyle:'expanded'}).on('error', sass.logError) )
        .pipe( gulp.dest('css') )
});

gulp.task('sass-main', function () {
    return gulp.src('sass/main.scss')
        .pipe( sass({outputStyle:'expanded'}).on('error', sass.logError) )
        .pipe( gulp.dest('css') )
});

gulp.task('watch', function () {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass'])
});

gulp.task('default', ['watch']);
