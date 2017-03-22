import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // returns a specific record based on rental id as model to rental template
    return this.store.findRecord('plan', params.plan_id);
  },
  actions: {
    updatePlan(plan, params) {
      console.log(plan.date);
      var branch = params['branch'];
      var record = params['record'];
      if (typeof record !== "number") {
        record = branch.length;
      }
      if ('tag' in params && typeof params['tag'] !== undefined) {
        plan[branch][record]['tag'] = params['tag'];
      }
      if ('details' in params && typeof params['details'] !== undefined) {
        plan[branch][record]['details'] = params['details'];
      }
      plan.save();
      this.transitionTo('business');
    }
  }
});
