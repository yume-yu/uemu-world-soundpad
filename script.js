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
