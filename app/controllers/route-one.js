import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toogleDirection: function() {
      this.toggleProperty('isGoingSouth');
    }
  },
  isGoingSouth: false
});
