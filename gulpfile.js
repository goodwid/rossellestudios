const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const parallel = require("concurrent-transform");
const os = require("os");


gulp.task('convert', () =>
    gulp.src('images/*')
        .pipe(parallel(
          imageResize({
      width : 800,
      // height : 100,
      upscale : false,
      imageMagick: true
    }), os.cpus().length))
        .pipe(gulp.dest('sized-images/'))
);
