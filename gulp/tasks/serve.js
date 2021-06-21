module.exports = () => {
    // $.gulp.task instead of gulp.task
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
    });
}