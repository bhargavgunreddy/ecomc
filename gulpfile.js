var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')


gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 4000
    })
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('src/js/controller.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('src/dest/'));

});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['browserify']);
});

gulp.task('default', ['connect', 'watch']);
