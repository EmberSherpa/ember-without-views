import Ember from 'ember';

export default Ember.Controller.extend({
  currentRouteClass: function(){
    return this.get('currentRouteName').dasherize();
  }.property('currentRouteName')
});
