// vendor/jquery-tipper.js
+(function($){
  $.fn.tipper = function() {
    this.on('click', function(){
      $(this).addClass('tipped');
    });
    return this;
  };
})(jQuery);
