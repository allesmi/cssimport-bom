var gulp = require('gulp');
var cssImpport = require('gulp-cssimport');

gulp.task('default', function() {
	gulp.src('index.html')
		.pipe(gulp.dest('dist/'));
	gulp.src('css/root.css')
		.pipe(cssImpport())
		.pipe(gulp.dest('dist/css'));
});