import Ember from 'ember';
import OddView from './n-list/odd';
import EvenView from './n-list/even';
import ThreeView from './n-list/three';

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
