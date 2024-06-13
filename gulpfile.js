const {src, dest, watch, series, parallel} = require("gulp");
const fs = require("fs");
const browserSync   = require("browser-sync").create();
const webpack       = require("webpack-stream");

const plumber     = require('gulp-plumber');
const notify      = require("gulp-notify");
const scss        = require("gulp-sass")(require("sass"));
const fileInclude = require("gulp-file-include");

const clean       = require("gulp-clean");
const webp        = require("gulp-webp");
const newer       = require("gulp-newer");
const imagemin    = require("gulp-imagemin"); 

const isProd = process.argv.includes("--prod");
const isDev  = !isProd;

const srcPath     = "src/";
const destPath    = "dist/";

const webpackConfig = {
    mode: isDev ? "development" : "production", 
    entry: {
        main: "/src/js/main.js",
        menu: "/src/js/menu.js",
        preview: "/src/js/preview.js",
        modal: "/src/js/modal.js",
    },

    output: {
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}


function cleanDest(done) { 
    if (fs.existsSync(`${destPath}`)) {
        return src(`${destPath}`, {read: false})
            .pipe(clean({force: true}))
    }

    done(); 
}


function copyImages() {
    return src(`${srcPath}img/**/*`)
        .pipe(dest(`${destPath}/img`))
}


function copyFonts() {
    return src(`${srcPath}fonts/**/*`)
        .pipe(newer(`${destPath}fonts/`))
        .pipe(dest(`${destPath}/fonts`));
}


function convertToWebp() {
    return src([`${srcPath}img/**/*`, `!${srcPath}img/**/*.{svg,webp}`])
        .pipe(newer(`${destPath}img/`))
        .pipe(webp())
        .pipe(dest(`${destPath}img`))
}


function optimizeImages() {
    convertToWebp();

    return src([`${srcPath}img/**/*`, `!${srcPath}img/**/*.{svg,webp}`])
        .pipe(newer(`${destPath}img/`))
        .pipe(imagemin({verbose: true}))
        .pipe(dest(`${destPath}img`))
}


function plumberNotify(Errortitle) {
    return {
        errorHandler: notify.onError({
            title: Errortitle,
            message: "Error: <%= error.message %>",
            sound: false
        })
    }
}


function buildStyles() {
    webpackConfig.mode = isDev ? "development" : "production";

    return src(`${srcPath}scss/**/*.scss`, {sourcemaps: isDev})
        .pipe(plumber(plumberNotify("SCSS")))
        .pipe(scss())
        .pipe(dest(`${destPath}css`, {sourcemaps: "."}))

        .pipe(browserSync.stream())
}


function buildScripts() {
    return src(`${srcPath}js/**/*.js`) 
        .pipe(plumber(plumberNotify("JS")))
        .pipe(webpack(webpackConfig))
        .pipe(dest(`${destPath}js/`))

        .pipe(browserSync.stream())
}


function buildHTML() {
    return src(`${srcPath}**/*.html`)
        .pipe(fileInclude({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(dest(`${destPath}`))
}


function browserSyncServer(done) {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    done();
}


function watchTasks(done) {
    watch([`${srcPath}scss/**/*.scss`], buildStyles);
    watch([`${srcPath}js/**/*.js`], buildScripts).on("change", browserSync.reload);
    watch([`${srcPath}**/*.html`], buildHTML).on("change", browserSync.reload);

    watch([`${srcPath}img`], optimizeImages)
    watch([`${srcPath}fonts/**/*`], copyFonts)
    
}


const dev = series(
    cleanDest, 
    copyImages, 
    copyFonts,
    buildStyles,
    buildScripts, 
    buildHTML,
    parallel(browserSyncServer, watchTasks)
);


const prod = series(
    cleanDest, 
    copyImages, 
    copyFonts,
    optimizeImages,
    buildStyles,
    buildScripts, 
    buildHTML,
);


module.exports = {
    dev,
    prod, 
    default: dev
}

/* npm run dev - режим разработки */
/* npm run prod - режим сборки */ 
