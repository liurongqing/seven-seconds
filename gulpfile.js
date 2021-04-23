const gulp = require('gulp')
const rollup = require('rollup')
const typedoc = require('gulp-typedoc')
const rollupTypescript = require('@rollup/plugin-typescript')

const { watch } = gulp

gulp.task('build', () => {
  return rollup
    .rollup({
      input: './src/index.ts',
      plugins: [rollupTypescript()],
    })
    .then((bundle) => {
      return bundle.write({
        file: './dist/index.js',
        format: 'umd',
        name: 'index',
        sourcemap: true,
      })
    })
})

// gulp.task('docs', function () {
//   return gulp.src(['src/index.ts']).pipe(
//     typedoc({
//       out: 'docs/',
//       name: '函数库12'
//     })
//   )
// })

gulp.task('watch', function () {
  gulp.watch('./src/**/*.ts', gulp.series('build'))
})

// gulp.task('watch:docs', function () {
//   gulp.watch('./src/**/*.ts', gulp.series('docs'))
// })
