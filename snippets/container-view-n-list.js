// views/n-list.js
export default Ember.CollectionView.extend({
  createChildView: function(viewClass, attrs) {
    switch (attrs.content.type) {
      case 'odd':   viewClass = OddView; break;
      case 'even':  viewClass = EvenView; break;
      case 'three': viewClass = ThreeView; break;
    }
    return this._super.call(this, viewClass, attrs);
  }
});
