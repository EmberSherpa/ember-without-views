// views/long-list.js
export default Ember.View.extend({
  pageObserver: function() {
    // make sure that view is rendered
    if (this.$()) {
      Ember.$('.long-list').scrollTop(0);
    }
  }.observes('controller.page')
});
