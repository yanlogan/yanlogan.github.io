module.exports = () => {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpeg,jpg,gif}')
                    .pipe($.gulp.dest('build/static/img'))
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpeg,gif}')
                    .pipe($.plugins.imagemin())
                    .pipe($.gulp.dest('build/static/img'))
    });
}