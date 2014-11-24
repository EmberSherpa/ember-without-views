// components/route-one-component.js
export default Ember.Component.extend({
  tagName: 'section',
  classNameBindings: [
    ':route-one',
    'direction:going-south:going-north'
  ]
});
