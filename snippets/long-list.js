// components/long-list.js
export default Ember.Component.extend({
  classNames: ['long-list'],
  resetScrollTop: function() {
    this.$().scrollTop(0);
  }
});
