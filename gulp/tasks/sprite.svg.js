'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg', function() {
    return $.gulp.src('./source/sprite/svg/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
            render: {
              scss: {
                dest:'../../style/_misc/_sprite.scss', //куда будет генерироваться получившийся файл стилей для наших иконок (в нём будут размеры)
                template: './source/style/_misc/_sprite-template.scss' // шаблон для генерации файла scss
              }
            }
          }
         }

         }))
      .pipe($.gulp.dest('./source/images'))
  })
};