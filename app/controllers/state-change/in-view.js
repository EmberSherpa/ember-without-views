import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['state-change'],
  page: Ember.computed.alias('controllers.state-change.page')
});
