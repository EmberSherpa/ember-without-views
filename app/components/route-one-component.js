import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNameBindings: [':route-one', 'direction:going-south:going-north']
});
