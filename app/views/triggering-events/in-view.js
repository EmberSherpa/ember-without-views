import Ember from 'ember';

export default Ember.View.extend({
  pageObserver: function() {
    if (this.$()) {
      Ember.$('.long-list').scrollTop(0);
    }
  }.observes('controller.page')
});
