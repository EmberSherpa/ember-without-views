import Ember from 'ember';

export default Ember.Component.extend({
  resetScrollTop: function() {
    this.$().scrollTop(0);
  }
});
