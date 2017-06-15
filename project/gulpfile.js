var gulp = require('gulp');
var typescript = require('gulp-typescript');

// src/tsをコンパイルしてdist/jsに展開
gulp.task('compile:ts', function(){
  return gulp.src(['src/ts/*.ts'])
    .pipe(typescript())
    .js 
    .pipe(gulp.dest('dist/js/'));
});

// gulpコマンドで実行するデフォルトタスク
gulp.task('default',[
    'clean:dist',
    'compile:ts',
    'copy:html',
    'server',
    'watch'
]);

// distフォルダを空っぽに
var del = require('del');

gulp.task('clean:dist', function(){
  return del.sync(['dist/*']); 
});

// HTMLをsrcからdistにコピー
gulp.task('copy:html', function(){
  return gulp.src(['src/*.html']) 
    .pipe(gulp.dest('dist/'));
});

// srcフォルダの監視
// ts,htmlが編集されたらタスクを再実行
gulp.task('watch', function(){
  gulp.watch([
    'src/ts/*.ts',
    'src/*.html'
  ], ['compile:ts','copy:html']); 
});

// ブラウザ起動
var browserSync = require('browser-sync').create();

// filesで指定したファイルが更新された時にリロードしてくれる
gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    files: ['dist/*']
  });
});