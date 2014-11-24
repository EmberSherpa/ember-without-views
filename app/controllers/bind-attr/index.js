import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleDirection: function() {
      this.toggleProperty('direction');
    }
  },
  direction: false
});
