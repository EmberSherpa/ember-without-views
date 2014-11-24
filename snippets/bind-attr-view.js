// views/route-one/index.js
export default Ember.View.extend({
  tagName: 'section',
  classNameBindings: [
    'controller.direction',
    ':route-one'
  ]
});
