import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Binding Attributes
  this.route('route-one');
  this.route('route-one-component');
  this.route('route-one-pod');

  // didInsertElement
  this.route('tipping', function(){
    this.route('with-view');
    this.route('with-helper');
    this.route('with-component');
  });
  this.route('triggering-events', function(){
    this.route('with-bindings');
  });
});

export default Router;
