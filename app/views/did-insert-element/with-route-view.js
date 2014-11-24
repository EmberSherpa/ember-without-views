import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$('.cow').tipper();
    });
  }
});
