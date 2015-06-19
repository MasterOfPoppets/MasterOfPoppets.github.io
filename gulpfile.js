var gulp = require('gulp'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	assign = require('lodash.assign'),
	gutil = require('gulp-util')

var browserifyOpts = {
	entries: './src/app.js',
	debug: true
}
var opts = assign({}, watchify.args, browserifyOpts)
var b = watchify(browserify(opts))

gulp.task('javascript', bundle)
b.on('update', bundle)
b.on('log', gutil.log)

function bundle() {
	return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.on('error', gutil.log.bind(gutil, 'Uglify Error'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'))
}