var gulp = require('gulp'),
  livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('web/*.*', function(event) {  
    livereload.changed(event.path);  
  });  
});

gulp.task('default', ['watch']);
