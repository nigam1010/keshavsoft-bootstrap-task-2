  // gulpfile.mjs
  import gulp from 'gulp';
  import imagemin from 'gulp-imagemin';

  // Define image optimization task
  export const optimizeImages = () => {
    return gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  };

  // Default task
  export default gulp.series(optimizeImages);
