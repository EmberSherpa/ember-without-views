// vendor/jquery-tipper.js
$.fn.tipper = function() {
  this.on('click', function(){
    $(this).addClass('tipped');
  });
  return this;
};
