const gulp = require('gulp');
const babel = require('gulp-babel');
 
// gulp.task('default',['praise'], () =>
   // gulp.watch(['src/**/*.es','!src/public/**/*.es'],['prsise'])
// );
gulp.task("default",['praise']);
gulp.task('praise', () =>
    gulp.src(['src/**/*.es','!src/public/**/*.es'])
        .pipe(babel({
            presets: ['env']//与配置的.babelrc中对应
        }))
        .pipe(gulp.dest('./build'))
);