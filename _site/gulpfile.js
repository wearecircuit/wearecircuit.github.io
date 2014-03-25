var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./assets/less/all.less')
        .pipe(less({ compress: true }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/less/**/*.*', ['less']);
});

gulp.task('default', ['less', 'watch']);