import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNameBindings: [':route-one', 'isGoingSouth:going-south:going-north'],
  attributeBindings: ['autofocus']
});
