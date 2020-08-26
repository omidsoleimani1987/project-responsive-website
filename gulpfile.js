const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  html: {
    src: './src/**/*.html',
    dest: './dist'
  },
  styles: {
    sass: {
      src: './src/styles/sass/**/*.scss',
      dest: './dist/styles/css'
    },
    images: {
      src: './src/styles/images',
      dest: './dist/styles/images'
    }
  },
  scripts: {
    src: './src/scripts/**/*.js',
    dest: './dist/scripts'
  }
};

// compile scss to css
function completeStyling() {
  return (
    //1. where is my sass files
    gulp
      .src(paths.styles.sass.src)
      // or : return gulp.src('./src/sass/style.scss');
      //2. pass that files throw sass compiler
      .pipe(sass().on('error', sass.logError))
      //3. autoprefixer
      .pipe(autoprefixer('last 2 versions'))
      //4. where to save compiled css
      .pipe(gulp.dest(paths.styles.sass.dest))
      //5. stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

//watch
function watchAllChanges() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch(paths.styles.sass.src, completeStyling);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
  gulp.watch(paths.scripts.src).on('change', browserSync.reload);
}

exports.style = completeStyling;
// cmd: gulp style
exports.watch = watchAllChanges;
// external url can be used for the mobile preview in the same network
