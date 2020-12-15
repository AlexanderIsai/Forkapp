const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');


const path = {
    src: {
        img: './src/img/**/*',
        scss: './src/scss/**/*.scss',
        html: 'index.html',
        js: './src/js/**/*.js',
        css:'./**/*.css'
    },
    dist: {
        css: './dist/css',
        img: './dist/img',
        js: './dist/js',
        root: '.dist'
    }
}
//function

const createStyle = () => {
    return gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(cleanCSS({compatibility: 'ie7'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
}

const createImg = () => {
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.stream())
}

const createJs = () => {
    return gulp.src(path.src.js)
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream())
}

const cleanDist = () => {
    return gulp.src(path.dist.root, {allowEmpty: true})
        .pipe(clean())
        .pipe(browserSync.stream())
}


const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(path.src.scss, createStyle).on('change', browserSync.reload);
    gulp.watch(path.src.img, createImg).on('change', browserSync.reload);
    gulp.watch(path.src.html).on('change', browserSync.reload);
    gulp.watch(path.src.js).on('change', browserSync.reload);
}

//task

gulp.task('build', gulp.series(cleanDist, createJs, createStyle, createImg))


gulp.task('dev', watcher)

