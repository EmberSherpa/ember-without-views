import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  // Binding Attributes
  this.route('bind-attr', function(){
    this.route('challenge-accepted');
    this.route('with-route-view');
    this.route('with-component');
  });
  this.route('bind-attr/with-component-in-pod');

  // didInsertElement
  this.route('did-insert-element', function(){
    this.route('with-route-view');
    this.route('with-helper');
    this.route('with-component');
  });

  // State Change
  this.route('state-change', function(){
    this.route('in-view');
    this.route('with-helper');
  });
  this.route('state-change/on-action-helper');

  // Container View
  this.route('container-view', function(){
    this.route('with-view');
    this.route('with-helper');
  });

});

export default Router;
