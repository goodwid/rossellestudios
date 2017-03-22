const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');

gulp.task('convert', () =>
    gulp.src('incoming-images/*')
        .pipe(imagemin())
        .pipe(imageResize({width: 800, imageMagick: true}))
        .pipe(gulp.dest('processed-images/'))
);
