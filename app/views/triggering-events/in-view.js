import Ember from 'ember';

export default Ember.View.extend({
  pageObserver: function() {
    if (this.$()) {
      this.$().find('.long-list').scrollTop(0);
    }
  }.observes('controller.page')
});
