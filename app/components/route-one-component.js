import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNameBindings: [
    'direction',
    ':route-one'
  ]
});
