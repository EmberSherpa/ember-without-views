// vendor/jquery-tipper.js
jQuery.fn.tipper = function() {
  this.on('click', function(){
    jQuery(this).addClass('tipped');
  });
  return this;
};
