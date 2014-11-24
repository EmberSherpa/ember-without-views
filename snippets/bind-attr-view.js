// views/route-one/index.js
export default Ember.View.extend({
  tagName: 'section',
  classNameBindings: [
    ':route-one',
    'controller.direction:going-south:going-north'
  ]
});
