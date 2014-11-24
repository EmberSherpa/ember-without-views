import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('container-view').map(function(item){
      item['componentName'] = 'n-%@-item'.fmt(item.type);
      return item;
    });
  }
});
