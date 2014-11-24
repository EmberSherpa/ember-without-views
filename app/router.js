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

  // manipulating DOM
  this.route('triggering-events', function(){
    this.route('in-view');
    this.route('with-helper');
  });
  this.route('triggering-events/on-action-helper');
  this.route('container-view', function(){
    this.route('with-helper');
  });
});

export default Router;
