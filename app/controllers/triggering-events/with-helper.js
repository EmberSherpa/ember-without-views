import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['triggering-events'],
  page: Ember.computed.alias('controllers.triggering-events.page')
});
