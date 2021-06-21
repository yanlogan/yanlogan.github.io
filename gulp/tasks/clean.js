module.exports = () => {
    $.gulp.task('clean', () => {
        return $.gulp.src('./build', { allowEmpty: true })
        .pipe($.plugins.clean());
    });
}