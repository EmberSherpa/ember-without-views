import Ember from 'ember';
import range from '../utils/range';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  actions: {
    changePage: function(page) {
      this.set('controller.page', page);
    }
  },
  model: function(params) {
    var start = (params.page - 1) * 10;
    return range(start, start + 10 - 1).map(function(n){
      return "Item Number " + (n+1);
    });
  }
});
