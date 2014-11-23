import Ember from 'ember';
import range from '../utils/range';

export default Ember.Route.extend({
  model: function() {
    return range(0, 9).map(function(){
      var n = Math.floor((Math.random() * 100) + 1);
      var type;
      if (n % 3 === 0) {
        type = 'three';
      }
      if (type == null) {
        type = n % 2 === 0 ? 'even' : 'odd';
      }
      return {
        value: n,
        type: type
      };
    });
  }
});
