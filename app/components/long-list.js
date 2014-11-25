import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['long-list'],
  pageObserver: function() {
    if (this.$()) {
      this.$().scrollTop(0);
    }
  }.observes('page')
});
