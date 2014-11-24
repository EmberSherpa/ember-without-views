// controllers/route-one/index.js
export default Ember.Controller.extend({
  actions: {
    toggleDirection: function() {
      this.toggleProperty('direction');
    }
  },
  direction: false
});
