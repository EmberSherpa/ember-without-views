import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click: function() {
    var page = parseInt(this.get('page'), 10);
    this.sendAction('change-page', ++page);
  }
});
