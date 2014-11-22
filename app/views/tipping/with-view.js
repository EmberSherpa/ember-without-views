import Ember from 'ember';

export default Ember.View.extend({
  bindFlipper: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$('.cow').tipper();
    });
  }.on('didInsertElement')
});
