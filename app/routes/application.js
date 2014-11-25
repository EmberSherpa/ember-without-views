import Ember from 'ember';
import slides from './../slides';

export default Ember.Route.extend({
  actions: {
    nextSlide: function() {
      var currentSlide = this.get('controller.currentPath');
      var pos = slides.indexOf(currentSlide);
      var next= slides[pos + 1];
      this.transitionTo(next);
      this.set('currentSlide', next);
    },
    previousSlide: function() {
      var currentSlide = this.get('controller.currentPath');
      var pos = slides.indexOf(currentSlide);
      var prev = slides[pos - 1];
      this.transitionTo(prev);
      this.set('currentSlide', prev);
    }
  }
});
