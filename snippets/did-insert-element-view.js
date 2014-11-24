// views/pasture/index.js
export default Ember.View.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, bindTipper);
    function bindTipper(){
      this.$('.cow').tipper();
    }
  }
});
