// routes/numbers/index.js
export default Ember.Route.extend({
  model: function() {
    return range(0, 9).map(function(){
      ...
      return {
        value: n,
        type: type,
        componentName: 'n-%@-item'.fmt(type)
      };
    });
  }
});
