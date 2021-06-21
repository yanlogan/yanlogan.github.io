module.exports = () => {
    $.gulp.task('scripts:lib', () => {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
        ])
        .pipe($.plugins.concat('libs.min.js'))
        .pipe($.gulp.dest('build/static/js'))
        .pipe($.browserSync.stream());
    });

    $.gulp.task('scripts', () => {
        return $.gulp.src('src/static/js/**/*.js')
        .pipe($.gulp.dest('build/static/js'))
        .pipe($.browserSync.stream());
    });
}