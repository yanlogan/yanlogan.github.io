module.exports = () => {
    $.gulp.task('sass', () => {
        return $.gulp.src('./src/static/scss/style.scss')
                    .pipe($.plugins.sourcemaps.init())
                    .pipe($.plugins.sass().on('error', $.plugins.sass.logError))
                    .pipe($.plugins.autoprefixer())
                    .on('error', $.plugins.notify.onError('Error: <%= error.message %>'))
                    .pipe($.plugins.cleanCss())
                    .pipe($.plugins.sourcemaps.write())
                    .pipe($.gulp.dest('build/static/css'))
                    .pipe($.browserSync.stream());
    });
}