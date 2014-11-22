import Ember from 'ember';

export default Ember.Component.extend({
  selector: null,
  didInsertElement: function() {
    var selector = this.get('selector');
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$().find(selector).tipper();
    });
  }
});
