import Ember from 'ember';

export function setupTipper(selector, options) {
  var view = options.data.view;
  Ember.run.scheduleOnce('afterRender', function(){
    view.$(selector).tipper();
  });
}

export default Ember.Handlebars.makeBoundHelper(setupTipper);
