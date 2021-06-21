module.exports = () => {
  $.gulp.task('fonts', () => {
      return $.gulp.src('./src/static/fonts/**/*')
                  .pipe($.gulp.dest('build/static/fonts'))
                  .on('end', $.browserSync.reload);
  });
}