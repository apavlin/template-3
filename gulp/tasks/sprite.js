'use strict';

module.exports = function() {
  $.gulp.task('sprite', function () {
  return  $.gulp.src('./source/sprite/*.png')
  .pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: '../style/common/sprite.scss'
  }))
  .pipe($.gulp.dest('./source/images'))
  })
};
