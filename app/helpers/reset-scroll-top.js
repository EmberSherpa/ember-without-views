import Ember from 'ember';

export function resetScrollTop(selector, options) {
  var view = options.data.view;
  if (view.get('_state') === 'inDOM') {
    view.$(selector).scrollTop(0);
  }
}

export default Ember.Handlebars.makeBoundHelper(resetScrollTop);
