(function (window, $) {
  'use strict';

  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function(){
      se[0].currentTime = 0;
      se[0].play();
    });
    return this;
  };

})(this, this.jQuery);

$('#btn-out').useSound('mousedown touchstart', '#sound-out');
$('#btn-congraturation').useSound('mousedown touchstart', '#sound-congratulation');
$('#btn-calendar').useSound('mousedown touchstart', '#sound-calendar');
$('#btn-goal').useSound('mousedown touchstart', '#sound-goal');
$('#btn-kora').useSound('mousedown touchstart', '#sound-kora');
$('#btn-jump').useSound('mousedown touchstart', '#sound-jump');
$('#btn-start').useSound('mousedown touchstart', '#sound-start');
$('#btn-stopsmartphone').useSound('mousedown touchstart', '#sound-stopsmartphone');
$('#btn-dash').useSound('mousedown touchstart', '#sound-dash');
$('#btn-toh').useSound('mousedown touchstart', '#sound-toh');
$('#btn-narabe').useSound('mousedown touchstart', '#sound-narabe');
$('#btn-yamei').useSound('mousedown touchstart', '#sound-yamei');
$('#btn-yokero').useSound('mousedown touchstart', '#sound-yokero');
$('#btn-quiet').useSound('mousedown touchstart', '#sound-quiet');
$('#btn-katsu').useSound('mousedown touchstart', '#sound-katsu');
$('#btn-backtable').useSound('mousedown touchstart', '#sound-backtable');
$('#btn-zone').useSound('mousedown touchstart', '#sound-zone');
$('#btn-quiet2').useSound('mousedown touchstart', '#sound-quiet2');
$('#btn-note').useSound('mousedown touchstart', '#sound-note');
$('#btn-mokusyoku').useSound('mousedown touchstart', '#sound-mokusyoku');
$('#btn-bomb').useSound('mousedown touchstart', '#sound-bomb');
