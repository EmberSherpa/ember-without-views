import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'section',
  classNameBindings: [':route-one', 'controller.isGoingSouth:going-south:going-north'],
  attributeBindings: ['autofocus']
});
