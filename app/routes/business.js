import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('plan', params.plan_id);
  },
  actions: {
    saveCustomerSegment(params) {
      var newCustomerSegment = this.store.createRecord('customerSegment', params);
      var plan = params.plan;
      plan.get('customerSegments').addObject(newCustomerSegment);
      newCustomerSegment.save().then(function(){
        return plan.save();
      });
      this.transitionTo('business', plan);
    }
  }

});
