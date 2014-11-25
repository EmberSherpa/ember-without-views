// components/go-tipping.js
export default Ember.Component.extend({
  selector: null,
  didInsertElement: function() {
    var selector = this.get('selector');
    Ember.run.scheduleOnce('afterRender', this, bindTipper);
    function bindTipper(){
      this.$().find(selector).tipper();
    }
  }
});
