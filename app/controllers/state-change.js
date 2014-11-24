import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1
});
