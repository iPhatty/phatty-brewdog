var gulp = require('gulp');
var sass = require('gulp-sass');

//Define 'styles' task
//Callback looks through the .src files, files are piped to gulp-sass mole to compile into css. dest saves the files to a destination
gulp.task('styles', function() {
  gulp
    .src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

//Watch task
//We pass in the path to the files we want to watch, and then pass in an array with the tasks that we want to run when the files are changed
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});
