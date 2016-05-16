var gulp = require('gulp');
var rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');

gulp.task('compress', function () {
	gulp.src('js/script.min.js')
		.pipe(rigger())
    	.pipe(uglify())
		.pipe(gulp.dest('js/'));
});