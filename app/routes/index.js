import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('plan');
  },
  actions: {
    savePlan(params){
      var newPlan = this.store.createRecord('plan', params);
      newPlan.save();
      this.transitionTo('index');
    }
  }
});
