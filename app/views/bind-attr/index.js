import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'section',
  classNameBindings: [
    ':route-one', 'controller.direction:going-south:going-north'
  ]
});
