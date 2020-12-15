const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat')
const clean = require('gulp-clean');
let uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
let rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');

const path ={
    src:{
        img:'./src/img/**/*',
        js:'./src/js/**/*.js',
        scss:'./src/scss/**/*.scss',
        html:'index.html'
    },
    dist:{
        img:'./dist/img',
        css:'./dist/css',
        js:'./dist/js',
        root:'./dist/'
    }
}
//functions

const createStyle = () =>{
    return gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
}

const createImg = () =>{
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.stream())
}

const createJs = () =>{
    return gulp.src(path.src.js)
        .pipe(rename("script.min.js"))
        .pipe(uglify())
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

gulp.task('build', gulp.series(cleanDist,createJs,createImg,createStyle))


gulp.task('dev', watcher)