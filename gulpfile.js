const {gulp, src, dest, watch } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const postcss=require('gulp-postcss')
const sass = require('gulp-sass');
const autoprefixer=require('gulp-autoprefixer');
const webserver=require('gulp-webserver');

sass.compiler = require('node-sass');

function sassCompile() {
    return (
        src('./sass/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(dest('./css'))
    );

}

function concat(){
    return (
    gulp.src('./*.css')
    .pipe(concat('all.sss'))
    .pipe(gulp.dest('./css/main.css'))
    );
}




exports.cssmin=function(){
    return(
        src('css/main.css')
        .pipe(autoprefixer().on('error'),autoprefixer.logError)
        .pipe(dest('src/css/',overwrite=true))
    );
}

exports.liveserver=function(){
    return(
        src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }))
    );
}

exports.js = function js() {
    return src('js/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('js/'));
}


exports.watch = function () {
    return watch(['sass/**/*.scss'], sassCompile,concat)
    
    ;
};

