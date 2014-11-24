// controllers/route-one/index.js
export default Ember.Controller.extend({
  queryParams: ['direction'],
  direction: 'south',
  actions: {
    toggleDirection: function() {
      this.set('direction', this.get('direction') === 'south' ? 'north' : 'south');
    }
  }
});
