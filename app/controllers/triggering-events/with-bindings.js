import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    say: function(message) {
      this.set('message', message);
    }
  }
});
