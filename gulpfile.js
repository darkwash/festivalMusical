import { src, dest, watch } from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(dest("build/css"));
  done();
}

export function dev() {
  watch("src/scss/**/*.scss", css);
}
