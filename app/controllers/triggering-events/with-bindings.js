import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1,
  actions: {
    changePage: function(page) {
      this.set('page', page);
    }
  }
});
