import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // returns a specific record based on rental id as model to rental template
    return this.store.findRecord('plan', params.plan_id);
  }
});
