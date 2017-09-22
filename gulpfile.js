var gulp = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Ungrouped',
      foo: 'Foo group',
      bar: 'Bar group',
    },
    basePath: 'https://github.com/SassDoc/sassdoc',
  };

  return gulp.src('src/scss/*.scss')
    .pipe(sassdoc(options));
});