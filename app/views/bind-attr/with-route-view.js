import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'section',
  classNameBindings: [
    'controller.direction',
    ':route-one'
  ]
});
