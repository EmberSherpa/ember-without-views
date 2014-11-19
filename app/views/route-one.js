import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'section',
  classNameBindings: [':route-with-view', 'controller.isGoingSouth:going-south:going-north'],
  attributeBindings: ['autofocus']
});
