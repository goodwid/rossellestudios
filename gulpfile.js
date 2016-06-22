const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const parallel = require("concurrent-transform");
const os = require("os");
const imagemin = require('gulp-imagemin');


gulp.task('convert', () =>
    gulp.src('sized-images/*')
        .pipe(parallel(imagemin()), os.cpus().length)
        .pipe(gulp.dest('sized-images2/'))
);
